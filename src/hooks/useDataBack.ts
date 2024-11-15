import { useEffect, useState } from "react"
import { api } from "../api/api"
import { loadFromLocalStorage } from "../services/localStorageActions"

interface DataBackProps {
  url: string
  jsonAdapter: (json: any) => any
  body?: Record<string, any> | null
}

export const useDataBack = <T>({
  url,
  jsonAdapter,
}: DataBackProps) => {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const token = loadFromLocalStorage("jwt_token", "")
      const response = await fetch(`${api}${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token ? `Bearer ${token}` : ""
        },
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const json = await response.json()
      const dataAdap = Array.isArray(json)
        ? json.map(jsonAdapter)
        : [jsonAdapter(json)];

      setData(dataAdap)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading, error, fetchData }
}
