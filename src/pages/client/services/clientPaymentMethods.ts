const API_URL = import.meta.env.VITE_BACKEND_URL

export const getClientPaymentMethods = async (token: string) => {
  const apiUrl = `${API_URL}/client/payment-methods`
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })

    // if not send token the api return 422
    if (response.status === 422) {
      throw new Error('No se ha podido autenticar')
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

export const deleteClientPaymentMethod = async (token: string, id: string) => {
  const apiUrl = `${API_URL}/client/payment-method/${id}`
  try {
    const response = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })

    // if not send token the api return 422
    if (response.status === 422) {
      throw new Error('No se ha podido autenticar')
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

export interface UpdatePaymentMethodProps {
  id_metodo_pago: string,
  nombre: string,
  numero_tarjeta: string,
}

export const addClientPaymentMethod = async (token: string, paymentMethod: UpdatePaymentMethodProps) => {
  const apiUrl = `${API_URL}/client/payment-method`
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(paymentMethod)
    })

    // if not send token the api return 422
    if (response.status === 422) {
      throw new Error('No se ha podido autenticar')
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

export const updateClientPaymentMethod = async (token: string, paymentMethod: UpdatePaymentMethodProps) => {
  const apiUrl = `${API_URL}/client/payment-method/${paymentMethod.id_metodo_pago}`
  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(paymentMethod)
    })

    // if not send token the api return 422
    if (response.status === 422) {
      throw new Error('No se ha podido autenticar')
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