import { useEffect, useState } from 'react'
import { getClientPaymentMethods } from '../../services/clientPaymentMethods'
import { loadFromLocalStorage } from '../../../../services/localStorageActions'

export interface CreditCardProps {
  id_metodo_pago: number,
  nombre: string,
  numero_tarjeta: string,
}

export const useGetClientPaymentMethods = () => {
  const [creditCards, setCreditCards] = useState<CreditCardProps[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  const fetchInfo = async () => {
    setLoading(true)
    setError(null)

    const token = loadFromLocalStorage<string>("jwt_token", "")

    try {
      const res = await getClientPaymentMethods(token)
      if (res.error) {
        throw new Error(res.error)
      }
      setCreditCards(res)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return {
    creditCards,
    loading,
    error,
  }
}