import { useState } from 'react'
import { loadFromLocalStorage } from '../../../../services/localStorageActions'
import { generateTicket } from '../../services/clientTickets'

export const useTicket = () => {
  const [ticketName, setTicketName] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  const fetchInfo = async (idPasaje: string) => {
    setLoading(true)
    setError(null)

    const token = loadFromLocalStorage<string>("jwt_token", "")

    try {
      const res = await generateTicket(token, idPasaje)
      if (res.error) {
        throw new Error(res.error)
      }
      setTicketName(res.ticket_name)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const resetTicketName = () => {
    setTicketName('')
  }

  return {
    fetchInfo,
    resetTicketName,
    ticketName,
    loading,
    error
  }
}
