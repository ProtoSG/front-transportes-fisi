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
  precioNeto: number
  setPrecioNeto: (precioNeto: number) => void

  igv: number
  setIgv: (igv: number) => void

  total: number
  setTotal: (total: number) => void

  fechaCompra: string
  setFechaCompra: (fechaCompra: string) => void

  ruc: string | null
  setRuc: (ruc: string | null) => void

  correo: string
  setCorreo: (correo: string) => void

  telefono: string
  setTelefono: (telefono: string) => void

  idCliente: number
  setIdCliente: (idCliente: number) => void

  idDescuento: number
  setIdDescuento: (idDescuento: number) => void

  idTipoBoleta: number
  setIdTipoBoleta: (idTipoBoleta: number) => void

  idMetodoPago: number
  setIdMetodoPago: (idMetodoPago: number) => void

  pasaje: Pasaje[]
  addPasaje: (pasaje: Pasaje) => void
  removePasaje: (idPasaje: number) => void
}

export const useTransactionData = create<Props>((set) => ({
  precioNeto: 0,
  setPrecioNeto: (precioNeto: number) => set(() => ({ precioNeto })),
  igv: 0,
  setIgv: (igv: number) => set(() => ({ igv })),
  total: 0,
  setTotal: (total: number) => set(() => ({ total })),
  fechaCompra: "",
  setFechaCompra: (fechaCompra: string) => set(() => ({ fechaCompra })),
  ruc: null,
  setRuc: (ruc: string | null) => set(() => ({ ruc })),
  correo: "",
  setCorreo: (correo: string) => set(() => ({ correo })),
  telefono: "",
  setTelefono: (telefono: string) => set(() => ({ telefono })),
  idCliente: 0,
  setIdCliente: (idCliente: number) => set(() => ({ idCliente })),
  idDescuento: 0,
  setIdDescuento: (idDescuento: number) => set(() => ({ idDescuento })),
  idTipoBoleta: 0,
  setIdTipoBoleta: (idTipoBoleta: number) => set(() => ({ idTipoBoleta })),
  idMetodoPago: 0,
  setIdMetodoPago: (idMetodoPago: number) => set(() => ({ idMetodoPago })),
  pasaje: [],
  addPasaje: (pasaje: Pasaje) => set((state) => ({ pasaje: [...state.pasaje, pasaje] })),
  removePasaje: (idPasaje: number) => set((state) => {
    const pasajeFilter = state.pasaje.filter((pasaje) => pasaje.idPasajero !== idPasaje)
    return { pasaje: pasajeFilter }
  }),
}))
