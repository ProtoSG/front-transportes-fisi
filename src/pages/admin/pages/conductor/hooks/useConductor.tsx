import { createContext, ReactNode, useContext } from "react";
import { Conductor } from "../models/conductor.model";
import { useDataBack } from "../../../../../hooks/useDataBack";
import { conductorAdapter } from "../adapters/conductor.adapter";

const ConductorContext = createContext({
  data: [] as Conductor[],
  loading: false,
  error: null as Error | null,
  fetchData: () => { }
})

export const ConductorProvider = ({ children }: { children: ReactNode }) => {
  const { data, loading, error, fetchData } = useDataBack<Conductor>({
    url: "/chofer/hired",
    jsonAdapter: conductorAdapter,
  })

  return (
    <ConductorContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </ConductorContext.Provider>
  )
}

export const useConductor = () => {
  const context = useContext(ConductorContext)
  if (context === undefined) {
    throw new Error("useConductor must be used within a ConductorProvider")
  }
  return context
}
