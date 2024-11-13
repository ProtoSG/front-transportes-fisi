import { useState } from "react"
import { useSeatsSelected } from "../../../../hooks/useSeatsSelected"
import { usePriceTotal } from "../../../../hooks/usePriceTotal"
import { Asiento } from "../models/asiento.model"
import { useViajeSelected } from "../../../../hooks/useViajeSelected"

interface SeatNotSelectedProps {
  seat: Asiento
}

export function SeatNotSelected({ seat }: SeatNotSelectedProps) {
  const [selected, setSelected] = useState<boolean>(false)

  const { addSeat, removeSeat } = useSeatsSelected()
  const { incrementTotal, decrementTotal } = usePriceTotal()

  const { viaje } = useViajeSelected()
  if (!viaje) return null

  const handleClick = (seat: Asiento) => {
    setSelected(!selected)

    if (selected) {
      removeSeat(seat.idAsiento)
      decrementTotal(seat.precio + viaje.precio)
    } else {
      addSeat(seat)
      incrementTotal(seat.precio + viaje.precio)
    }
  }

  return (
    <div
      className="w-10 h-9 text-primary-700 rounded bg-primary-50 drop-shadow-lg flex flex-col items-center justify-center hover:cursor-pointer group"
      onClick={() => handleClick(seat)}
    >
      <small className="">{seat.numeroAsiento}</small>
      <hr className="border-primary-500 w-full" />
      <div className={`flex items-center w-full justify-center rounded-b gap-1 group-hover:bg-primary-500 group-hover:text-primary-50 transition-colors ${selected ? "bg-primary-500 text-primary-50" : ""}`}>
        <small>S/</small>
        <span className="font-bold">{seat.precio + viaje.precio}</span>
      </div>
    </div>
  )
}
