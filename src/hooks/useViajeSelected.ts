import { create } from "zustand";
import { Viaje } from "../pages/searchResult/models/viaje.model";

interface ViajeSelectedProps {
  viaje: Viaje | null,
  cleanViaje: () => void,
  addViaje: (viaje: Viaje) => void,
}

export const useViajeSelected = create<ViajeSelectedProps>((set => ({
  viaje: null,
  cleanViaje: () => set(() => ({ viaje: null })),
  addViaje: (viaje: Viaje) => set(() => ({ viaje: viaje })),
})))
