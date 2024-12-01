import { createContext ,ReactNode ,useContext} from "react"
import { Bus } from "../models/bus.model"
import { useDataBack } from "../../../../../hooks/useDataBack";
import { busAdapter } from "../adapters/bus.adapter";
const BusContext= createContext({
  data: [] as Bus[],
  loading: false,
  error: null as Error | null,
  fetchData: () => { }
})

export const BusProvider = ({ children }: { children: ReactNode }) => {
  const { data, loading, error, fetchData } = useDataBack<Bus>({
    url: "/admin/bus",
    jsonAdapter: busAdapter,
  })

  return (
    <BusContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </BusContext.Provider>
  )
}

export const useBus = () => {
  const context = useContext(BusContext)
  if (context === undefined) {
    throw new Error("useBus must be used within a BusProvider")
  }
  return context
}