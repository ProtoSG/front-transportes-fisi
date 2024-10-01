import { create } from "zustand";
import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "../services/localStorageActions";

interface DataTripInfoProps {
  ciudadOrigen: string;
  setCiudadOrigen: (ciudad: string) => void;
  removeCiudadOrigen: () => void;

  ciudadDestino: string;
  setCiudadDestino: (ciudad: string) => void;
  removeCiudadDestino: () => void;

  fechaSalida: string;
  setFechaSalida: (fecha: string) => void;
  removeFechaSalida: () => void;

  hora: string;
  setHora: (hora: string) => void;
  removeHora: () => void;

  ubicacion: string;
  setUbicacion: (ubicacion: string) => void;
  removeUbicacion: () => void;

  tipoServicio: string;
  setTipoServicio: (tipo: string) => void;
  removeTipoServicio: () => void;
}

export const useDataTripInfo = create<DataTripInfoProps>((set) => ({
  ciudadOrigen: loadFromLocalStorage<string>("ciudadOrigen", ""),
  setCiudadOrigen: (ciudad: string) => set(() => {
    saveToLocalStorage("ciudadOrigen", ciudad)
    return { ciudadOrigen: ciudad }
  }),
  removeCiudadOrigen: () => set(() => {
    removeFromLocalStorage("ciudadOrigen")
    return { ciudadOrigen: "" }
  }),

  ciudadDestino: loadFromLocalStorage<string>("ciudadDestino", ""),
  setCiudadDestino: (ciudad: string) => set(() => {
    saveToLocalStorage("ciudadDestino", ciudad)
    return { ciudadDestino: ciudad }
  }),
  removeCiudadDestino: () => set(() => {
    removeFromLocalStorage("ciudadDestino")
    return { ciudadDestino: "" }
  }),

  fechaSalida: loadFromLocalStorage<string>("fechaSalida", ""),
  setFechaSalida: (fecha: string) => set(() => {
    saveToLocalStorage("fechaSalida", fecha)
    return { fechaSalida: fecha }
  }),
  removeFechaSalida: () => set(() => {
    removeFromLocalStorage("fechaSalida")
    return { fechaSalida: "" }
  }),

  hora: loadFromLocalStorage<string>("hora", ""),
  setHora: (hora: string) => set(() => {
    saveToLocalStorage("hora", hora)
    return { hora: hora }
  }),
  removeHora: () => set(() => {
    removeFromLocalStorage("hora")
    return { hora: "" }
  }),

  ubicacion: loadFromLocalStorage<string>("ubicacion", ""),
  setUbicacion: (ubicacion: string) => set(() => {
    saveToLocalStorage("ubicacion", ubicacion)
    return { ubicacion: ubicacion }
  }),
  removeUbicacion: () => set(() => {
    removeFromLocalStorage("ubicacion")
    return { ubicacion: "" }
  }),

  tipoServicio: loadFromLocalStorage<string>("tipoServicio", ""),
  setTipoServicio: (tipo: string) => set(() => {
    saveToLocalStorage("tipoServicio", tipo)
    return { tipoServicio: tipo }
  }),
  removeTipoServicio: () => set(() => {
    removeFromLocalStorage("tipoServicio")
    return { tipoServicio: "" }
  }),
}))



