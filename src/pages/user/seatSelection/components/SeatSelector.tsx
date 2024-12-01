import { useViajeSelected } from "../../../../hooks/useViajeSelected";
import { useAsientos } from "../hooks/useAsientos";
import { RenderSeats } from "./RenderSeats";

export function SeatSelector() {
  const { viaje } = useViajeSelected()

  if (!viaje) return null

  const { asientos } = useAsientos({ id: viaje.idViaje })
  console.log("ASIENTOS", asientos)

  const piso1Asientos = asientos.filter(asiento => asiento.piso === 1)
  const piso2Asientos = asientos.filter(asiento => asiento.piso === 2)

  const piso1AsientosIzq = piso1Asientos.filter((_, index) => (index + 1) % 3 !== 0)
  const piso1AsientosDer = piso1Asientos.filter((_, index) => (index + 1) % 3 === 0);

  const piso2AsientosIzq = piso2Asientos.filter((_, index) => !((index + 2) % 4 === 0 || (index + 1) % 4 === 0));
  const piso2AsientosDer = piso2Asientos.filter((_, index) => (index + 2) % 4 === 0 || (index + 1) % 4 === 0);

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

