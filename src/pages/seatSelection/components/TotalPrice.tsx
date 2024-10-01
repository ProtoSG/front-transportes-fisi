import { useNavigate } from "react-router-dom"
import { NewButton } from "../../../components"
import { usePriceTotal } from "../../../hooks/usePriceTotal"
import { useSeatsSelected } from "../../../hooks/useSeatsSelected"
import { ListSeatSelected } from "./ListSeatSelected"
import { removeFromLocalStorage, saveToLocalStorage } from "../../../services/localStorageActions"
import { useEffect } from "react"

export function TotalPrice() {
  const { seats, cleanSeats } = useSeatsSelected()
  const { total, cleanTotal } = usePriceTotal()

  const seats1piso = seats.filter((seat) => seat.nivel === 1)
  const seats2piso = seats.filter((seat) => seat.nivel === 2)

  const navigate = useNavigate()

  useEffect(() => {
    cleanTotal()
    cleanSeats()
    removeFromLocalStorage("total")
    removeFromLocalStorage("seats")
  }, [])

  const handleConfirm = () => {
    saveToLocalStorage("total", total)
    saveToLocalStorage("seats", seats)
    navigate("/passenger-details")
  }

  return (
    <div className="bg-primary-100 py-3 px-6 rounded-lg text-nowrap min-w-40 max-w-40 flex flex-col gap-3">
      {
        seats.length > 0 && (
          <div>
            <ListSeatSelected
              seats={seats1piso}
              piso={1}
            />
            <ListSeatSelected
              seats={seats2piso}
              piso={2}
            />
          </div>
        )
      }
      <div>
        <p className="text-xs text-center text-primary-700 italic">Precio Total</p>
        <div className="flex items-center justify-center text-primary-500 font-bold">
          <small>s/</small>
          <span className="text-3xl">{total.toFixed(2)}</span>
        </div>
      </div>
      <NewButton className="text-white" onClick={handleConfirm}>
        Confirmar
      </NewButton>
    </div>
  )
}

