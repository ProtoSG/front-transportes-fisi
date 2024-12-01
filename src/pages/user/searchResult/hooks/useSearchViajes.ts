import { useCallback, useEffect, useState } from "react"
import { Viaje } from "../models/viaje.model"
import { ViajeBack } from "../models/viajeBack.model"
import { viajeAdapter } from "../adapters/viaje.adapter"
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
      const response = await fetch(
        `${api}/viaje/search?origen=${origen}&destino=${destino}&fecha=${fecha}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data: ViajeBack[] = await response.json();
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
