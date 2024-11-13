import { create } from "zustand";
import { loadFromLocalStorage } from "../services/localStorageActions";
import { Asiento } from "../pages/user/seatSelection/models/asiento.model";


interface SeatSelectedProps {
  seats: Asiento[],
  cleanSeats: () => void,
  addSeat: (seat: Asiento) => void,
  removeSeat: (idSeat: number) => void,
}

export const useSeatsSelected = create<SeatSelectedProps>((set) => ({
  seats: loadFromLocalStorage<Asiento[]>("seats", []),
  cleanSeats: () => set(() => ({ seats: [] })),
  addSeat: (seat: Asiento) => set((state) => ({ seats: [...state.seats, seat] })),
  removeSeat: (idSeat: number) => set((state) => {
    const seatsFilter = state.seats.filter((seat) => seat.idAsiento !== idSeat)
    return { seats: seatsFilter }
  }),
}))
