import { create } from "zustand";

const loadFromLocalStorage = <T>(key: string, defaultValue: T) => {
  const storageValue = localStorage.getItem(key);
  return storageValue ? JSON.parse(storageValue) : defaultValue;
}

const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
}

interface DataTripInfoProps {
  ciudadOrigen: string;
  setCiudadOrigen: (ciudad: string) => void;

  ciudadDestino: string;
  setCiudadDestino: (ciudad: string) => void;

  fechaSalida: string;
  setFechaSalida: (fecha: string) => void;

  hora: string;
  setHora: (hora: string) => void;

  ubicacion: string;
  setUbicacion: (ubicacion: string) => void;

  tipoServicio: string;
  setTipoServicio: (tipo: string) => void;
}

export const useDataTripInfo = create<DataTripInfoProps>((set) => ({
  ciudadOrigen: loadFromLocalStorage<string>("ciudadOrigen", ""),
  setCiudadOrigen: (ciudad: string) => set(() => {
    saveToLocalStorage("ciudadOrigen", ciudad)
    return { ciudadOrigen: ciudad }
  }),

  ciudadDestino: loadFromLocalStorage<string>("ciudadDestino", ""),
  setCiudadDestino: (ciudad: string) => set(() => {
    saveToLocalStorage("ciudadDestino", ciudad)
    return { ciudadDestino: ciudad }
  }),

  fechaSalida: loadFromLocalStorage<string>("fechaSalida", ""),
  setFechaSalida: (fecha: string) => set(() => {
    saveToLocalStorage("fechaSalida", fecha)
    return { fechaSalida: fecha }
  }),

  hora: loadFromLocalStorage<string>("hora", ""),
  setHora: (hora: string) => set(() => {
    saveToLocalStorage("hora", hora)
    return { hora: hora }
  }),

  ubicacion: loadFromLocalStorage<string>("ubicacion", ""),
  setUbicacion: (ubicacion: string) => set(() => {
    saveToLocalStorage("ubicacion", ubicacion)
    return { ubicacion: ubicacion }
  }),

  tipoServicio: loadFromLocalStorage<string>("tipoServicio", ""),
  setTipoServicio: (tipo: string) => set(() => {
    saveToLocalStorage("tipoServicio", tipo)
    return { tipoServicio: tipo }
  }),
}))



