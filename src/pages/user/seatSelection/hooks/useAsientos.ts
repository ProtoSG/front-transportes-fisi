import { useCallback, useEffect, useState } from "react"
import { Asiento } from "../models/asiento.model"
import { AsientoBack } from "../models/asientoBack.model"
import { loadFromLocalStorage } from "../../../../services/localStorageActions"
import { asientoAdapter } from "../adapters/asiento.adapter"
const api = import.meta.env.VITE_BACKEND_URL

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
      const token = loadFromLocalStorage("jwt_token", "")
      const response = await fetch(`${api}/general/seat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id_viaje_programado: id,
        })
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`)
      }

      const data: AsientoBack[] = await response.json()
      console.log("DATA", data)
      const asientosAdap = data.map(asientoAdapter)
      console.log("HOOK", asientosAdap)

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
