import { Navigate } from "react-router-dom"
import { loadFromLocalStorage } from "../services/localStorageActions"
import { ReactNode } from "react"
import { User } from "../pages/login/model/user.model"

interface Props {
  children: ReactNode
}

export const PrivateRouteAdmin = ({ children }: Props) => {
  const token = loadFromLocalStorage<string>("jwt_token", "")
  const user = loadFromLocalStorage<User>("user", {} as User)

  return token && user.role === "admin" ? children : <Navigate to={`/login/admin}`} replace />
}

export const PrivateRouteClient = ({ children }: Props) => {
  const token = loadFromLocalStorage<string>("jwt_token", "")
  const user = loadFromLocalStorage<User>("user", {} as User)

  return token && user.role === "client" ? children : <Navigate to={`/login/admin}`} replace />
}
