import { useEffect, useState } from 'react'
import { getClientInfo } from '../../services/clientInfo'
import { loadFromLocalStorage } from '../../../../services/localStorageActions'

export interface ClientInfoProps {
  apellido_mat: string
  apellido_pat: string
  correo: string
  dni: string
  fecha_nacimiento: string
  id_cliente: number
  nombre: string
  sexo: 'masculino' | 'femenino'
  telefono: string
  username: string
}

export const useClientInfo = () => {
  const [clientInfo, setClientInfo] = useState<ClientInfoProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  const fetchInfo = async () => {
    setLoading(true)
    setError(null)

    const token = loadFromLocalStorage<string>("jwt_token", "")

    try {
      const res = await getClientInfo(token)
      if (res.error) {
        throw new Error(res.error)
      }
      setClientInfo(res)
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
    clientInfo,
    loading,
    error,
  }
}