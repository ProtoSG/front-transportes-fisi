const API_URL = import.meta.env.VITE_BACKEND_URL

export const getClientInfo = async (token: string) => {
  const apiUrl = `${API_URL}/client/info`
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