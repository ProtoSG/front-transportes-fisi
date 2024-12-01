import { create } from "zustand";

interface Pasaje {
  precioNeto: number
  igv: number
  total: number
  idPasajero: number
  idAsiento: number
  idViaje: number
}

interface Props {
  idViaje: number
  setIdViaje: (idViaje: number) => void

  ruc: string | null
  setRuc: (ruc: string | null) => void

  correo: string
  setCorreo: (correo: string) => void

  telefono: string
  setTelefono: (telefono: string) => void

  idCliente: number
  setIdCliente: (idCliente: number) => void

  idDescuento: number | null
  setIdDescuento: (idDescuento: number) => void

  tipoBoleta: "boleta" | "factura"
  setTipoBoleta: (tipoBoleta: "boleta" | "factura") => void

  idMetodoPago: number
  setIdMetodoPago: (idMetodoPago: number) => void

  pasaje: Pasaje[]
  addPasaje: (pasaje: Pasaje) => void
  removePasaje: (idPasaje: number) => void
}

export const useTransactionData = create<Props>((set) => ({
  idViaje: 0,
  setIdViaje: (idViaje: number) => set(() => ({ idViaje })),

  ruc: null,
  setRuc: (ruc: string | null) => set(() => ({ ruc })),

  correo: "",
  setCorreo: (correo: string) => set(() => ({ correo })),

  telefono: "",
  setTelefono: (telefono: string) => set(() => ({ telefono })),

  idCliente: 0,
  setIdCliente: (idCliente: number) => set(() => ({ idCliente })),

  idDescuento: null,
  setIdDescuento: (idDescuento: number) => set(() => ({ idDescuento })),

  tipoBoleta: "boleta",
  setTipoBoleta: (tipoBoleta: "boleta" | "factura") => set(() => ({ tipoBoleta })),

  idMetodoPago: 0,
  setIdMetodoPago: (idMetodoPago: number) => set(() => ({ idMetodoPago })),

  pasaje: [],
  addPasaje: (pasaje: Pasaje) => set((state) => ({ pasaje: [...state.pasaje, pasaje] })),
  removePasaje: (idPasaje: number) => set((state) => {
    const pasajeFilter = state.pasaje.filter((pasaje) => pasaje.idPasajero !== idPasaje)
    return { pasaje: pasajeFilter }
  }),
}))
