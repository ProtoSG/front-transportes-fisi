import { create } from "zustand";
import { Viaje } from "../pages/user/searchResult/models/viaje.model";

interface ViajeSelectedProps {
  viaje: Viaje | null,
  cleanViaje: () => void,
  addViaje: (viaje: Viaje) => void,
}

export const useViajeSelected = create<ViajeSelectedProps>((set => ({
  viaje: {} as Viaje,
  cleanViaje: () => set(() => ({ viaje: null })),
  addViaje: (viaje: Viaje) => set(() => ({ viaje: viaje })),
})))
