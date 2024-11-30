import { loadFromLocalStorage } from "../../../../../services/localStorageActions";
import { RutaCreate } from "../models/ruta.model"
const api = import.meta.env.VITE_BACKEND_URL
export const createRuta = async (body:RutaCreate) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/admin/ruta`, {
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
    return { success: false, message: "Error al crear ruta" }
  }
}

export const updateRuta = async (body:RutaCreate, id:number) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/admin/ruta/${id}`, {
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
    return { success: false, message: "Error al actualizar ruta" }
  }
}