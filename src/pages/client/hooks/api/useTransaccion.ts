import { useState } from 'react'
import { loadFromLocalStorage } from '../../../../services/localStorageActions'
import { generateTransaccionPDF } from '../../services/clientTransaccion'

export const useTransaccion = () => {
  const [transactionName, setTransactionName] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  const fetchInfo = async (idTransaccion: string) => {
    setLoading(true)
    setError(null)

    const token = loadFromLocalStorage<string>("jwt_token", "")

    try {
      const res = await generateTransaccionPDF(token, idTransaccion)
      if (res.error) {
        throw new Error(res.error)
      }
      setTransactionName(res.transaction_name)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const resetTransactionName = () => {
    setTransactionName('')
  }

  return {
    fetchInfo,
    resetTransactionName,
    transactionName,
    loading,
    error
  }
}
