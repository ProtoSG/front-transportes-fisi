import { ArrowLargeIcon, CalendarIcon } from "@icons";
import { useDataTripInfo } from "../hooks/useDataTripInfo";

export function TripInfoPanel() {

  const { ciudadOrigen, ciudadDestino, hora, ubicacion, tipoServicio } = useDataTripInfo();

  return (
    <article className="bg-primary-100 rounded-xl px-8 py-5 flex flex-col gap-4">
      <main className="flex flex-col gap-2">
        {
          tipoServicio && (
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
          <p className="text-xs text-nowrap">Jueves 19 de Septiembre</p>
        </div>
      </main>
      {
        hora && ubicacion && (
          <>
            <hr className="border-primary-800 border-dotted" />
            <footer className="flex gap-4 items-center ">
              <span className="text-sm font-bold text-primary-600 text-nowrap">07:05 h</span>
              <div className="flex flex-col text-sm leading-3">
                <small>Embarque</small>
                <small>Av. Nicolás Arriola 780, La Victoria - Lima</small>
              </div>
            </footer>
          </>
        )
      }
    </article>
  )
}
