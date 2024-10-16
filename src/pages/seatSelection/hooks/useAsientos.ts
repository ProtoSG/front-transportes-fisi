import { useCallback, useEffect, useState } from "react"
import { Asiento } from "../models/asiento.model"
import { api } from "../../../api/api"
import { AsientoBack } from "../models/asientoBack.model"
import { asientoAdapter } from "../adapters/asiendo.adapter"

interface AsientosProps {
  id: number
}

export const useAsientos = ({ id }: AsientosProps) => {
  const [asientos, setAsientos] = useState<Asiento[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchAsientos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`${api}/asiento/bus/${id}`)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`)
      }

      const data: AsientoBack[] = await response.json()
      const asientosAdap = data.map(asientoAdapter)

      setAsientos(asientosAdap)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err)
      } else {
        setError(new Error("Unknown error occurred"))
      }
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchAsientos()
  }, [fetchAsientos])

  return { asientos, loading, error }
}
