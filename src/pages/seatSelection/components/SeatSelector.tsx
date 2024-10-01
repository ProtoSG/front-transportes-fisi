import { Seat } from "../models/SeatModel";
import { RenderSeats } from "./RenderSeats";

const asientos: Seat[] = [
  {
    id_asiento: 1,
    nivel: 1,
    numero: 1,
    id_bus: 1,
    ocupado: false,
    precio: 60
  },
  {
    id_asiento: 2,
    nivel: 1,
    numero: 2,
    id_bus: 2,
    ocupado: false,
    precio: 60
  },
  {
    id_asiento: 3,
    nivel: 1,
    numero: 3,
    id_bus: 3,
    ocupado: false,
    precio: 80
  },
  {
    id_asiento: 4,
    nivel: 1,
    numero: 4,
    id_bus: 4,
    ocupado: false,
    precio: 60
  },
  {
    id_asiento: 5,
    nivel: 1,
    numero: 5,
    id_bus: 5,
    ocupado: false,
    precio: 60
  },
  {
    id_asiento: 6,
    nivel: 1,
    numero: 6,
    id_bus: 5,
    ocupado: false,
    precio: 60
  }
]

const asientosPiso1Duplicado: Seat[] = [...asientos, ...asientos]

export function SeatSelector() {

  const piso1AsientosIzq = asientosPiso1Duplicado.filter((_, index) => (index + 1) % 3 !== 0)
  const piso1AsientosDer = asientosPiso1Duplicado.filter((_, index) => (index + 1) % 3 === 0);

  const piso2AsientosIzq = asientosPiso1Duplicado.filter((_, index) => !((index + 2) % 4 === 0 || (index + 1) % 4 === 0));
  const piso2AsientosDer = asientosPiso1Duplicado.filter((_, index) => (index + 2) % 4 === 0 || (index + 1) % 4 === 0);

  return (
    <section className="w-full flex justify-center">
      <div className="w-96 gap-7 flex flex-col">
        <div className="bg-primary-100 rounded-lg px-8 font-bold py-2 flex items-center justify-between">
          <p className="text-xl">Piso 1</p>
          <span className="italic">Cama 160°</span>
        </div>
        <div className="flex justify-between border-2 rounded-lg border-primary-200 p-4">
          <section className="grid grid-cols-2 max-w-20 gap-x-6 gap-y-3">
            <RenderSeats asientos={piso1AsientosIzq} />
          </section>
          <section className="flex flex-col gap-3">
            <RenderSeats asientos={piso1AsientosDer} />
          </section>
        </div>
        <div className="bg-primary-100 rounded-lg px-8 font-bold py-2 flex items-center justify-between">
          <p className="text-xl">Piso 2</p>
          <span className="italic">Cama 180°</span>
        </div>
        <div className="flex justify-between border-2 rounded-lg border-primary-200 p-4">
          <section className="grid grid-cols-2 max-w-20 gap-x-6 gap-y-3">
            <RenderSeats asientos={piso2AsientosIzq} />
          </section>
          <section className="grid grid-cols-2 max-w-20 gap-x-6 gap-y-3">
            <RenderSeats asientos={piso2AsientosDer} />
          </section>
        </div>
      </div>
    </section >
  );
}

