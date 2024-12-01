import { create } from "zustand";
import { Departamento } from "../model/departamento.model";

interface Props {
  origenDestino: string
  setOrigenDestino: (origen: string) => void

  destinos: Departamento[]
  setDestinos: (destinos: Departamento[]) => void
}

export const useDestinosList = create<Props>((set) => ({
  origenDestino: "",
  setOrigenDestino: (origen: string) => set({ origenDestino: origen }),

  destinos: [] as Departamento[],
  setDestinos: (destinos: Departamento[]) => set({ destinos }),
}))
