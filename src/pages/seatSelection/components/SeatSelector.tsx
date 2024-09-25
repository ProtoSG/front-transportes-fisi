import { SeatNotSelected } from "./SeatNotSelected";
import { SeatSelected } from "./SeatSelected";

export function SeatSelector() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-96 gap-7 flex flex-col">
        <div className="bg-primary-100 rounded-lg px-8 font-bold py-2 flex items-center justify-between">
          <p className="text-xl">Piso 1</p>
          <span className="italic">Cama 160°</span>
        </div>
        <div className="flex justify-between border-2 rounded-lg border-primary-200 p-4">
          <section className="grid grid-cols-2 max-w-20 gap-x-6 gap-y-3">
            <SeatSelected />
            <SeatNotSelected />
            <SeatSelected />
            <SeatNotSelected />
            <SeatSelected />
            <SeatNotSelected />
            <SeatSelected />
            <SeatNotSelected />
          </section>
          <section className="flex flex-col gap-3">
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
          </section>
        </div>
        <div className="bg-primary-100 rounded-lg px-8 font-bold py-2 flex items-center justify-between">
          <p className="text-xl">Piso 2</p>
          <span className="italic">Cama 180°</span>
        </div>
        <div className="flex justify-between border-2 rounded-lg border-primary-200 p-4">
          <section className="grid grid-cols-2 max-w-20 gap-x-6 gap-y-3">
            <SeatSelected />
            <SeatNotSelected />
            <SeatSelected />
            <SeatNotSelected />
            <SeatSelected />
            <SeatNotSelected />
            <SeatSelected />
            <SeatNotSelected />
            <SeatSelected />
            <SeatNotSelected />
            <SeatSelected />
            <SeatNotSelected />
          </section>
          <section className="grid grid-cols-2 max-w-20 gap-x-6 gap-y-3">
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
            <SeatNotSelected />
          </section>
        </div>
      </div>
    </section>
  )
}

