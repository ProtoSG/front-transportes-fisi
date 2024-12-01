import { useDataBack } from "../../../hooks/useDataBack"
import { departamentoOrigenAdapter } from "../adapters/departamento.adapter"
import { Departamento } from "../model/departamento.model"

export const useDepartamentosOrigen = () => {
  const { data, loading, error } = useDataBack<Departamento>({
    url: "/general/origins",
    jsonAdapter: departamentoOrigenAdapter,
  })

  return { data, loading, error }
}
