import { create } from "zustand";

interface ClientProps {
  token: string
  setToken: (token: string) => void
}

export const useClient = create<ClientProps>((set) => ({
  token: "",
  setToken: (token: string) => set(() => ({ token })),
}))
