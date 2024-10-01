import { create } from "zustand"
import { loadFromLocalStorage } from "../services/localStorageActions"

interface PriceTotalProps {
  total: number,
  cleanTotal: () => void,
  incrementTotal: (monto: number) => void,
  decrementTotal: (monto: number) => void
}

export const usePriceTotal = create<PriceTotalProps>((set) => ({
  total: loadFromLocalStorage("total", 0),
  cleanTotal: () => set(() => ({ total: 0 })),
  incrementTotal: (monto: number) => set((state) => {
    return { total: state.total + monto }
  }),
  decrementTotal: (monto: number) => set((state) => {
    return { total: state.total - monto }
  })
}))
