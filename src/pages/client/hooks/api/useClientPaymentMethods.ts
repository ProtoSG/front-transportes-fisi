import { useEffect, useState } from 'react'
import { addClientPaymentMethod, deleteClientPaymentMethod, getClientPaymentMethods, updateClientPaymentMethod, UpdatePaymentMethodProps } from '../../services/clientPaymentMethods'
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

export const useDeleteClientPaymentMethod = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  const [idDeleted, setIdDeleted] = useState('')

  const deleteCreditCard = async (id: string) => {
    setLoading(true)
    setError(null)

    const token = loadFromLocalStorage<string>("jwt_token", "")

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

  const addPaymentMethod = async (paymentMethod: UpdatePaymentMethodProps) => {
    setLoading(true)
    setError(null)

    const token = loadFromLocalStorage<string>("jwt_token", "")

    try {
      const res = await addClientPaymentMethod(token, paymentMethod)
      if (res.error) {
        throw new Error(res.error)
      }
      setNewData({
        id_metodo_pago: res.id_metodo_pago,
        nombre: res.nombre,
        numero_tarjeta: res.numero_tarjeta,
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

export const useUpdatePaymentMethod = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  const [newData, setNewData] = useState<CreditCardProps | null>(null)

  const updatePaymentMethod = async (paymentMethod: UpdatePaymentMethodProps) => {
    setLoading(true)
    setError(null)

    const token = loadFromLocalStorage<string>("jwt_token", "")

    try {
      const res = await updateClientPaymentMethod(token, paymentMethod)
      if (res.error) {
        throw new Error(res.error)
      }
      setNewData({
        id_metodo_pago: res.id_metodo_pago,
        nombre: res.nombre,
        numero_tarjeta: res.numero_tarjeta,
      })
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    updatePaymentMethod,
    newData,
    loading,
    error,
  }
}