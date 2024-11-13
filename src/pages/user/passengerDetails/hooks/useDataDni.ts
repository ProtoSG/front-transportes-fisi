import { useState } from "react"
import { Dni } from "../model/dni.model"
import { dniAdapter } from "../adapters/dni.adapter"

export const useDataDni = () => {
  const [data, setData] = useState<Dni>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | string | null>(null)

  const getData = async (dni: string) => {
    setLoading(true)
    setError(null)
    try {
      console.log("use", dni)
      const response = await fetch(`http://localhost:3000/api/buscar-dni/${dni}`)
      const data = await response.json()

      const dataAdapter: Dni = dniAdapter(data.data)

      setData(dataAdapter)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }


  return { data, loading, error, getData }
}
