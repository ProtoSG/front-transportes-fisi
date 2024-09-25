import { create } from "zustand";

interface DataTripInfoProps {
  ciudadOrigen: string;
  setCiudadOrigen: (ciudad: string) => void;

  ciudadDestino: string;
  setCiudadDestino: (ciudad: string) => void;

  fechaSalida: string;
  setFechaSalida: (fecha: string) => void;

  hora: string;
  setHoraHora: (hora: string) => void;

  ubicacion: string;
  setUbicacion: (ubicacion: string) => void;

  tipoServicio: string;
  setTipoServicio: (tipo: string) => void;
}

export const useDataTripInfo = create<DataTripInfoProps>((set) => ({
  ciudadOrigen: "",
  setCiudadOrigen: (ciudad: string) => set({ ciudadOrigen: ciudad }),

  ciudadDestino: "",
  setCiudadDestino: (ciudad: string) => set({ ciudadDestino: ciudad }),

  fechaSalida: "",
  setFechaSalida: (fecha: string) => set({ fechaSalida: fecha }),

  hora: "test",
  setHoraHora: (hora: string) => set({ hora: hora }),

  ubicacion: "test",
  setUbicacion: (ubicacion: string) => set({ ubicacion: ubicacion }),

  tipoServicio: "Ejecutivo VIP",
  setTipoServicio: (tipo: string) => set({ tipoServicio: tipo }),
}))
