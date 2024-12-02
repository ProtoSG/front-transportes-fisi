import { ArrowLargeIcon, BusIcon } from "@icons"
import { DetailsTerminal } from "./components"
import { useNavigate } from "react-router-dom";
import { Viaje } from "../../models/viaje.model";
import { NewButton } from "../../../../../components";
import { useDataTripInfo } from "../../../../../hooks/useDataTripInfo";
import { useViajeSelected } from "../../../../../hooks/useViajeSelected";
import { loadFromLocalStorage } from "../../../../../services/localStorageActions";
import { useClient } from "../../../../../hooks/useClient";
import { useTransactionData } from "../../../../../hooks/useTransactionData";

interface ServiceDetailsCardProps {
  viaje: Viaje
}

export function ServiceDetailsCard({ viaje }: ServiceDetailsCardProps) {

  const { setHora, setUbicacion, setTipoServicio } = useDataTripInfo()
  const { addViaje } = useViajeSelected()
  const { setIdViaje } = useTransactionData()
  const { token, user } = useClient()

  const navigate = useNavigate()

  const handleOnClick = () => {
    if (!token || user.role !== "client") {
      console.log("PASA")
      const dialog = document.getElementById("dialog-login-client") as HTMLDialogElement
      if (dialog) dialog.showModal()
      return
    }

    setHora(viaje.embarque.hora)
    setUbicacion(viaje.desembarque.ubicacion)
    setTipoServicio(viaje.servicio.nombre)
    addViaje(viaje)
    setIdViaje(viaje.idViaje)
    navigate("/seat-selection")
  }

  return (
    <div className="w-full border-2 border-primary-500 rounded-lg flex">
      <article className="px-2 py-4 w-full">
        <header className="px-3 flex justify-between items-center">
          <p className="text-primary-400">Servicio</p>
          <span className="font-bold text-primary-900">{viaje.servicio.nombre}</span>
        </header>
        <main className="flex my-2 px-8 gap-4 justify-between items-center py-3  border-y-2 border-primary-500">
          <DetailsTerminal
            type="embarque"
            hour={viaje.embarque.hora}
            location={viaje.embarque.ubicacion}
          />
          <ArrowLargeIcon className="text-primary-500 font-bold size-8" />
          <DetailsTerminal
            type="desembarque"
            hour={viaje.desembarque.hora}
            location={viaje.desembarque.ubicacion}
          />
        </main>
        <footer className="px-3 flex justify-between items-center">
          <div className="text-primary-400 flex items-center gap-2">
            <BusIcon />
            {/* <span className="text-xs">{viaje.bus.piso} pisos</span> */}
          </div>
          <p className="text-primary-500 font-bold text-xs">Solo quedan {viaje.asientosDisponibles} asientos</p>
        </footer>
      </article>
      <div className="bg-primary-100 text-primary-50 flex flex-col justify-between p-4 rounded-r-lg">
        <small className="text-primary-500 font-bold">desde</small>
        <div className="flex items-center gap-2">
          <small className="text-primary-500 text-xl">s/</small>
          <div>
            <span className="text-primary-700 font-bold text-3xl">{viaje.precio}</span>
            <span className="text-primary-700 font-bold text-2xl">.00</span>
          </div>
        </div>
        <NewButton onClick={handleOnClick}>Elegir</NewButton>
      </div>
    </div>
  )
}
