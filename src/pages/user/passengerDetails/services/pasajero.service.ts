import { loadFromLocalStorage } from "../../../../services/localStorageActions"
import { PasajeroBack } from "../model/pasajero.model"

const api = import.meta.env.VITE_BACKEND_URL
const token = loadFromLocalStorage("jwt_token", "")

interface Props {
  body: PasajeroBack
}

export const postPasajero = async ({ body }: Props) => {
  const response = await fetch(`${api}/pasajero`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })

  const data = await response.json()

  if (data.error) {
    return { success: false, message: data.error }
  }

  return { success: true, message: data.message }
}
