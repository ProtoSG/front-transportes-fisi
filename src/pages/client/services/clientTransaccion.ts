const API_URL = import.meta.env.VITE_BACKEND_URL

export const getClientTransaccion = async (token: string) => {
  const apiUrl = `${API_URL}/client/transactions`
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status === 422) {
      throw new Error("No se ha podido autenticar")
    }

    if (!response.ok) {
      const resJson = await response.json()
      throw new Error(resJson.error)
    }

    const resJson = await response.json()
    return resJson
  } catch (err) {
    return { error: err }
  }
}

export const generateTransaccionPDF = async (token: string, id_transaccion: string) => {
  const apiUrl = `${API_URL}/transaction/pdf/${id_transaccion}/generate`
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status === 422) {
      throw new Error("No se ha podido autenticar")
    }

    if (!response.ok) {
      const resJson = await response.json()
      throw new Error(resJson.error)
    }

    const resJson = await response.json()
    return resJson
  } catch (err) {
    return { error: err }
  }
}
