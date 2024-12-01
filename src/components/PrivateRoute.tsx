import { Navigate } from "react-router-dom"
import { loadFromLocalStorage } from "../services/localStorageActions"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const PrivateRoute = ({ children }: Props) => {
  const token = loadFromLocalStorage<string>("jwt_token", "")
  return token ? children : <Navigate to="/login/admin" replace />
}
