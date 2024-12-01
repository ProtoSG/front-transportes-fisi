import { createContext ,ReactNode ,useContext} from "react"
import { Ruta } from "../models/ruta.model"
import { useDataBack } from "../../../../../hooks/useDataBack";
import { rutaAdapter } from "../adapters/ruta.adapter";
const RutaContext= createContext({
  data: [] as Ruta[],
  loading: false,
  error: null as Error | null,
  fetchData: () => { }
})

export const RutaProvider = ({ children }: { children: ReactNode }) => {
  const { data, loading, error, fetchData } = useDataBack<Ruta>({
    url: "/admin/ruta",
    jsonAdapter: rutaAdapter,
  })

  return (
    <RutaContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </RutaContext.Provider>
  )
}

export const useRuta = () => {
  const context = useContext(RutaContext)
  if (context === undefined) {
    throw new Error("useBus must be used within a BusProvider")
  }
  return context
}