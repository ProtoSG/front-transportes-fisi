import { useEffect, useState } from "react"
import { Ciudad } from "../model/ciudad.model"

interface CiudadBack {
  id_ciudad: number,
  nombre: string
}

export const useCiudades = () => {
  const [ciudades, setCiudades] = useState<Ciudad[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  async function getCiudades() {
    setLoading(true)
    try {
      const response = await fetch("http://localhost:8080/ciudad")
      const data = await response.json()

      const ciudadAdapter = data.map((ciudad: CiudadBack) => ({
        id: ciudad.id_ciudad,
        nombre: ciudad.nombre
      }))

      setCiudades(ciudadAdapter)
    }
    catch (error) {
      setError(error as Error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCiudades()
  }, [])

  return { ciudades, loading, error }
}
