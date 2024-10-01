import { create } from "zustand";
import { loadFromLocalStorage } from "../services/localStorageActions";

type Seat = {
  id_asiento: number;
  nivel: number;
  numero: number;
  id_bus: number;
  ocupado: boolean;
  precio: number
}

interface SeatSelectedProps {
  seats: Seat[],
  cleanSeats: () => void,
  addSeat: (seat: Seat) => void,
  removeSeat: (idSeat: number) => void,
}

export const useSeatsSelected = create<SeatSelectedProps>((set) => ({
  seats: loadFromLocalStorage<Seat[]>("seats", []),
  cleanSeats: () => set(() => ({ seats: [] })),
  addSeat: (seat: Seat) => set((state) => ({ seats: [...state.seats, seat] })),
  removeSeat: (idSeat: number) => set((state) => {
    const seatsFilter = state.seats.filter((seat) => seat.id_asiento !== idSeat)
    return { seats: seatsFilter }
  }),
}))
