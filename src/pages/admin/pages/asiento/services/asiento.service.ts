import { loadFromLocalStorage } from "../../../../../services/localStorageActions"
import { AsientoCreate } from "../models/asiento.model"
const api = import.meta.env.VITE_BACKEND_URL
export const createAsiento = async (body: AsientoCreate) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/admin/asiento`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()
    if(data.error){
      return { success: false, message: data.error }
    }

    return { success: true, message: data.message }
  } catch (error) {
    console.error(error)
    return { success: false, message: "Error al crear asiento" }
  }
}

export const updateAsiento = async (body: AsientoCreate, id: number) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/admin/asiento/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
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
    return { success: false, message: "Error al actualizar los asientos" }
  }
}