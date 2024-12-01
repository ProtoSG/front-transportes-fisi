import { Ciudad } from "../model/ciudad.model"
import { useDataBack } from "../../../hooks/useDataBack"
import { ciudadAdapter } from "../adapters/ciudad.adapter"

export const useCiudades = () => {
  const { data, loading, error } = useDataBack<Ciudad>({
    url: "/terminal/departamento",
    jsonAdapter: ciudadAdapter,
  })

  return { data, loading, error }
}
