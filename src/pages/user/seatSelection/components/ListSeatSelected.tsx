import { Asiento } from "../models/asiento.model"

interface ListSeatSelectedProps {
  seats: Asiento[],
  piso: number
}

export function ListSeatSelected({ seats, piso }: ListSeatSelectedProps) {
  return seats.length > 0 && (
    <div className="leading-3 border-b-2 border-primary-800 pb-2 max-w-full">
      <small className="font-bold text-sm">Piso {piso}</small>
      <div className="flex flex-wrap leading-4">
        <small>Asiento(s): </small>
        {
          seats.map((seat) => (
            <small key={seat.idAsiento} className="font-bold px-[2px]">{String(seat.numeroAsiento).padStart(2, '0')}</small>
          ))
        }
      </div>
    </div>
  )
}
