import { useEffect, useState } from 'react'
import { getClientTransaccion } from '../../services/clientTransaccion'
import { loadFromLocalStorage } from '../../../../services/localStorageActions'

export interface ClientTransaccionProps {
  id_transaccion: string
  fecha_compra: string
  hora_compra: string
  precio_total: number
}

export const useClientTransaccions = () => {
  const [clientTransaccions, setClientTransaccions] = useState<ClientTransaccionProps[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  const fetchTransaccions = async () => {
    setLoading(true)
    setError(null)

    const token = loadFromLocalStorage<string>("jwt_token", "")

    try {
      const res = await getClientTransaccion(token)
      if (res.error) {
        throw new Error(res.error)
      }
      setClientTransaccions(res)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTransaccions()
  }, [])

  return {
    clientTransaccions,
    loading,
    error,
  }
}
