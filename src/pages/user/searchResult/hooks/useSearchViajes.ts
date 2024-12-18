import { useCallback, useEffect, useState } from "react"
import { Viaje } from "../models/viaje.model"
import { ViajeBack } from "../models/viajeBack.model"
import { viajeAdapter } from "../adapters/viaje.adapter"
import { loadFromLocalStorage } from "../../../../services/localStorageActions"
const api = import.meta.env.VITE_BACKEND_URL

interface useViajesProps {
  origen: string
  destino: string
  fecha: string
}

export const useSearchViajes = ({ origen, destino, fecha }: useViajesProps) => {
  const [viajes, setViajes] = useState<Viaje[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const getViajes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const token = loadFromLocalStorage("jwt_token", "")
      const response = await fetch(`${api}/general/scheduled-trip`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ciudad_origen: origen,
          ciudad_destino: destino,
          fecha: fecha,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data: ViajeBack[] = await response.json();
      console.log(data)
      const viajeAdap = data.map(viajeAdapter);

      setViajes(viajeAdap);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Unknown error occurred"));
      }
    } finally {
      setLoading(false);
    }
  }, [origen, destino, fecha]);

  useEffect(() => {
    getViajes()
  }, [getViajes])

  return { viajes, loading, error }
}
