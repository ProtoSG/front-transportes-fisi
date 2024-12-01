import { create } from "zustand";
import { loadFromLocalStorage } from "../services/localStorageActions";

interface User {
  id: number
  role: string
  username: string
  fullname: string
}

interface ClientProps {
  token: string
  setToken: (token: string) => void

  user: User
  setUser: (user: User) => void
}

export const useClient = create<ClientProps>((set) => ({
  token: loadFromLocalStorage<string>("jwt_token", ""),
  setToken: (token: string) => set(() => ({ token })),

  user: loadFromLocalStorage<User>("user", {} as User),
  setUser: (user: User) => set(() => ({ user })),
}))
