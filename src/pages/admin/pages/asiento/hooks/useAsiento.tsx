import { createContext, ReactNode, useContext } from "react";
import { useDataBack } from "../../../../../hooks/useDataBack";
import { Asiento } from "../models/asiento.model";
import { asientoAdapter } from "../adapters/asiento.adapter";

const AsientoContext = createContext(
  {
    data: [] as Asiento[],
    loading: false,
    error: null as Error | null,
    fetchData: () => { }
  }
)

export const AsientoProvider = ({ children }:{children:ReactNode}) => {
  const { data, loading, error, fetchData } = useDataBack<Asiento>({
    url: "/admin/asiento",
    jsonAdapter: asientoAdapter,
  })

  return (
    <AsientoContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </AsientoContext.Provider>
  )
}

export const useAsiento = () => {
  const context = useContext(AsientoContext)
  if (context === undefined) {
    throw new Error("useAsiento must be used within a AsientoProvider")
  }
  return context
}