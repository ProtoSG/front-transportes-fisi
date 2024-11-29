import { loadFromLocalStorage } from "../../../../../services/localStorageActions"
import { ConductorCreate, ConductorStatus, ConductorUpdate } from "../models/conductor.model"

const api = import.meta.env.VITE_BACKEND_URL
const token = loadFromLocalStorage("jwt_token", "")

export const createConductor = async (body: ConductorCreate) => {
  try {
    const response = await fetch(`${api}/chofer/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
      }
    )

    const data = await response.json()

    if (data.error) {
      return { success: false, message: data.error }
    }

    return { success: true, message: data.message }
  } catch (error) {
    console.error(error)
    return { success: false, message: "Error al crear conductor" }
  }
}

export const updateConductor = async (body: ConductorUpdate) => {
  try {
    const response = await fetch(`${api}/chofer/update`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
      }
    )

    const data = await response.json()

    if (data.error) {
      return { success: false, message: data.error }
    }

    return { success: true, message: data.message }
  } catch (error) {
    console.error(error)
    return { success: false, message: "Error al actualizar conductor" }
  }
}

export const changeStatusConductor = async (body: ConductorStatus) => {
  try {
    const response = await fetch(`${api}/chofer/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
      }
    )

    const data = await response.json()

    if (data.error) {
      return { success: false, message: data.error }
    }

    return { success: true, message: data.message }
  } catch (error) {
    console.error(error)
    return { success: false, message: "Error al cambiar estado del conductor" }
  }
}
