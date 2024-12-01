import { loadFromLocalStorage } from "../../../../../services/localStorageActions";
import { TerminalCreate } from "../models/terminal.model"
const api = import.meta.env.VITE_BACKEND_URL
export const createTerminal = async (body:TerminalCreate) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/admin/terminal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
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
    return { success: false, message: "Error al crear bus" }
  }
}

export const updateTerminal = async (body:TerminalCreate, id:number) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/admin/terminal/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
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
    return { success: false, message: "Error al actualizar el terminal" }
  }
}