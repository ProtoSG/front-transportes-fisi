import { loadFromLocalStorage } from "../../../../services/localStorageActions"
import { Transaction } from "../model/transaction.model"

const api = import.meta.env.VITE_BACKEND_URL
const token = loadFromLocalStorage("jwt_token", "")

interface Props {
  body: Transaction
}

export const postTransaction = async ({ body }: Props) => {
  try {
    const response = await fetch(`${api}/transaction/new`, {
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
  } catch (error) {
    console.error(error)
    return { success: false, message: "Error al crear transacción" }
  }
}
