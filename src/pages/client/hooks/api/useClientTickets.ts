import { useEffect, useState } from 'react'
import { getTicketsByIdClient } from '../../services/clientTickets'
import { loadFromLocalStorage } from '../../../../services/localStorageActions'

export interface ClientTicketsProps {
  id_pasaje: string
  hora_salida: string
  puerto_destino: string
  puerto_origen: string
  precio: number
  fecha_salida: string
  nombre_pasajero: string
}

export const useClientTickets = () => {
  const [clientTickets, setClientTickets] = useState<ClientTicketsProps[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  const fetchTickets = async () => {
    setLoading(true)
    setError(null)

    const token = loadFromLocalStorage<string>("jwt_token", "")

    try {
      const res = await getTicketsByIdClient(token)
      if (res.error) {
        throw new Error(res.error)
      }
      setClientTickets(res)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchTickets()
  }, [])

  return {
    clientTickets,
    loading,
    error,
  }
}
