import { NewButton } from "../../../../components"
import { ArrowLargeIcon, BusIcon } from "@icons"
import { DetailsTerminal } from "./components"

export function ServiceDetailsCard() {
  return (
    <div className="w-full border-2 border-primary-500 rounded-lg flex">
      <article className="px-2 py-4 w-full">
        <header className="px-3 flex justify-between items-center">
          <p className="text-primary-400">Servicio</p>
          <span className="font-bold text-primary-900">Ejecutivo VIP</span>
        </header>
        <main className="flex my-2 px-8 gap-4 justify-between items-center py-3  border-y-2 border-primary-500">
          <DetailsTerminal />
          <ArrowLargeIcon className="text-primary-500 font-bold size-8" />
          <DetailsTerminal />
        </main>
        <footer className="px-3 flex justify-between items-center">
          <div className="text-primary-400 flex items-center gap-2">
            <BusIcon />
            <span className="text-xs">2 pisos</span>
          </div>
          <p className="text-primary-500 font-bold text-xs">Solo quedan 11 asientos</p>
        </footer>
      </article>
      <div className="bg-primary-100 text-primary-50 flex flex-col justify-between p-4 rounded-r-lg">
        <small className="text-primary-500 font-bold">desde</small>
        <div className="flex items-center gap-2">
          <small className="text-primary-500 text-xl">s/</small>
          <div>
            <span className="text-primary-700 font-bold text-3xl">60</span>
            <span className="text-primary-700 font-bold text-2xl">.00</span>
          </div>
        </div>
        <NewButton>Elegir</NewButton>
      </div>
    </div>
  )
}
