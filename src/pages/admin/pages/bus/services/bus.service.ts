import { loadFromLocalStorage } from "../../../../../services/localStorageActions";
import { BusCreate } from "../models/bus.model"
const api = import.meta.env.VITE_BACKEND_URL
export const createBus = async (body:BusCreate) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/admin/bus`, {
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

export const updateBus = async (body:BusCreate, id:number) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/admin/bus/${id}`, {
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
    return { success: false, message: "Error al actualizar bus" }
  }
}