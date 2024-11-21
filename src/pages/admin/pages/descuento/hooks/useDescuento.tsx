import { createContext, ReactNode, useContext } from "react"
import { useDataBack } from "../../../../../hooks/useDataBack"
import { descuentoAdapter } from "../adapters/descuento.adapter"
import { Descuento } from "../models/descuento.model"

const DescuentoContext = createContext({
  data: [] as Descuento[],
  loading: false,
  error: null as Error | null,
  fetchData: () => { }
})

export const DescuentoProvider = ({ children }: { children: ReactNode }) => {
  const { data, loading, error, fetchData } = useDataBack<Descuento>({
    url: "/discount",
    jsonAdapter: descuentoAdapter,
  })

  return (
    <DescuentoContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </DescuentoContext.Provider>
  )
}

export const useDescuento = () => {
  const context = useContext(DescuentoContext)
  if (context === undefined) {
    throw new Error("useDescuento must be used within a DescuentoProvider")
  }
  return context
}
