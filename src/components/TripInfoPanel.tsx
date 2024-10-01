import { ArrowLargeIcon, CalendarIcon } from "@icons";
import { useDataTripInfo } from "../hooks/useDataTripInfo";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(date);

  return formattedDate;
};

export function TripInfoPanel() {
  const { ciudadOrigen, ciudadDestino, hora, ubicacion, tipoServicio, fechaSalida } = useDataTripInfo();
  const [active, setActive] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/search-results") setActive(true);
    else setActive(false);
  }, [pathname])

  const date = formatDate(fechaSalida);

  return (
    <article className="bg-primary-100 rounded-xl px-8 py-5 flex flex-col gap-4">
      <main className="flex flex-col gap-2">
        {
          active && tipoServicio && (
            <h3 className="text-center font-semibold text-primary-600">{tipoServicio}</h3>
          )
        }
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl text-primary-900 capitalize">{ciudadOrigen}</p>
          <ArrowLargeIcon className="text-primary-500 size-8" />
          <p className="font-bold text-xl text-primary-900 capitalize">{ciudadDestino}</p>
        </div>
        <div className="flex gap-2 items-center justify-center ">
          <CalendarIcon className="text-primary-500" />
          <p className="text-xs text-nowrap capitalize">{date}</p>
        </div>
      </main>
      {
        active && hora && ubicacion && (
          <>
            <hr className="border-primary-800 border-dotted" />
            <footer className="flex gap-4 items-center ">
              <span className="text-sm font-bold text-primary-600 text-nowrap">{hora}</span>
              <div className="flex flex-col text-sm leading-3">
                <small>Embarque</small>
                <small>{ubicacion}</small>
              </div>
            </footer>
          </>
        )
      }
    </article>
  )
}
