import { loadFromLocalStorage } from "../../../../../services/localStorageActions";
import { ServicioCreate } from "../models/servicio.model";
const api = import.meta.env.VITE_BACKEND_URL

export const createServicio = async (body: ServicioCreate) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/service`, {
      method: "POST",
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
    return { success: false, message: "Error al crear servicio" }
  }
}

export const updateServicio = async (body: ServicioCreate, id: number) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/service/${id}`, {
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
    return { success: false, message: "Error al actualizar servicio" }
  }
}
