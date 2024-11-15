import { api } from "../../../../../api/api";
import { loadFromLocalStorage } from "../../../../../services/localStorageActions";
import { DescuentoCreate } from "../models/descuento.model";

export const createDescuento = async (body: DescuentoCreate) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/discount`,
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
    return { success: false, message: "Error al crear descuento" }
  }
}

export const updateDescuento = async (body: DescuentoCreate, id: number) => {
  try {
    const token = loadFromLocalStorage("jwt_token", "")
    const response = await fetch(`${api}/discount/${id}`,
      {
        method: "PUT",
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
    return { success: false, message: "Error al actualizar descuento" }
  }
}
