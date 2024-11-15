import { create } from "zustand";

interface EditState<T> {
  isEdit: boolean
  setIsEdit: (isEdit: boolean) => void

  data: T | null
  setData: (data: T) => void
}

export const createEditStore = <T>() => create<EditState<T>>((set) => ({
  isEdit: false,
  setIsEdit: (isEdit: boolean) => set(() => ({ isEdit })),

  data: null,
  setData: (data: T) => set(() => ({ data })),
}))
