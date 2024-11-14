import { useEffect, useState } from 'react'
import { addClientPaymentMethod, AddUpdatePaymentMethod, deleteClientPaymentMethod, getClientPaymentMethods } from '../../services/clientPaymentMethods'
import { loadFromLocalStorage } from '../../../../services/localStorageActions'

export interface CreditCardProps {
  id_metodo_pago: string,
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

    const token = loadFromLocalStorage<string>("jwt_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczMTYxMzE1MiwianRpIjoiMzExMzgzNjctMDlmZi00OTQ3LWJiNTEtZDIyMjkzNGZiZWEyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZF9jbGllbnRlIjo0LCJ1c2VybmFtZSI6ImNsaWVudGU0IiwiZnVsbG5hbWUiOiJKdWRpdGggSXpxdWllcmRvIFB1Z2EifSwibmJmIjoxNzMxNjEzMTUyLCJjc3JmIjoiMzE5ODcxMWEtOTcxOS00MmZmLTkxNzMtNjhmZjZmZjQwZTcwIiwiZXhwIjoxNzMyMjE3OTUyfQ.2dZOs7N2k7NwStz4Q8gLmYITIQ23xd-gXRFBhNjG2rc")

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

export const useDeleteClientPaymentMethod = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  const [idDeleted, setIdDeleted] = useState('')

  const deleteCreditCard = async (id: string) => {
    setLoading(true)
    setError(null)

    const token = loadFromLocalStorage<string>("jwt_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczMTYxMzE1MiwianRpIjoiMzExMzgzNjctMDlmZi00OTQ3LWJiNTEtZDIyMjkzNGZiZWEyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZF9jbGllbnRlIjo0LCJ1c2VybmFtZSI6ImNsaWVudGU0IiwiZnVsbG5hbWUiOiJKdWRpdGggSXpxdWllcmRvIFB1Z2EifSwibmJmIjoxNzMxNjEzMTUyLCJjc3JmIjoiMzE5ODcxMWEtOTcxOS00MmZmLTkxNzMtNjhmZjZmZjQwZTcwIiwiZXhwIjoxNzMyMjE3OTUyfQ.2dZOs7N2k7NwStz4Q8gLmYITIQ23xd-gXRFBhNjG2rc")

    try {
      const res = await deleteClientPaymentMethod(token, id)
      if (res.error) {
        throw new Error(res.error)
      }
      setIdDeleted(res.id_metodo_pago)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    deleteCreditCard,
    idDeleted,
    loading,
    error,
  }
}

export const useAddPaymentMethod = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  const [newData, setNewData] = useState<CreditCardProps | null>(null)

  const addPaymentMethod = async (paymentMethod: AddUpdatePaymentMethod) => {
    setLoading(true)
    setError(null)

    const token = loadFromLocalStorage<string>("jwt_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczMTYxMzE1MiwianRpIjoiMzExMzgzNjctMDlmZi00OTQ3LWJiNTEtZDIyMjkzNGZiZWEyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZF9jbGllbnRlIjo0LCJ1c2VybmFtZSI6ImNsaWVudGU0IiwiZnVsbG5hbWUiOiJKdWRpdGggSXpxdWllcmRvIFB1Z2EifSwibmJmIjoxNzMxNjEzMTUyLCJjc3JmIjoiMzE5ODcxMWEtOTcxOS00MmZmLTkxNzMtNjhmZjZmZjQwZTcwIiwiZXhwIjoxNzMyMjE3OTUyfQ.2dZOs7N2k7NwStz4Q8gLmYITIQ23xd-gXRFBhNjG2rc")

    try {
      const res = await addClientPaymentMethod(token, paymentMethod)
      if (res.error) {
        throw new Error(res.error)
      }
      setNewData({
        id_metodo_pago: res.id_metodo_pago,
        nombre: paymentMethod.nombre,
        numero_tarjeta: paymentMethod.numero_tarjeta,
      })
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    addPaymentMethod,
    newData,
    loading,
    error,
  }
}