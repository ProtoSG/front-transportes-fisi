import { createContext, ReactNode, useContext } from "react";
import { useDataBack } from "../../../../../hooks/useDataBack";
import { Servicio } from "../models/servicio.model";
import { servicioAdapter } from "../adapters/servicio.adapter";

const ServicioContext = createContext({
  data: [] as Servicio[],
  loading: false,
  error: null as Error | null,
  fetchData: () => { }
})

export const ServicioProvider = ({ children }: { children: ReactNode }) => {
  const { data, loading, error, fetchData } = useDataBack<Servicio>({
    url: "/service",
    jsonAdapter: servicioAdapter,
  })

  return (
    <ServicioContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </ServicioContext.Provider>
  )
}

export const useServicio = () => {
  const context = useContext(ServicioContext)
  if (context === undefined) {
    throw new Error("useServicio must be used within a ServicioProvider")
  }
  return context
}
