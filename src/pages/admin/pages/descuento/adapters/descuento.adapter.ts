import { DescuentoBack, Descuento } from "../models/descuento.model"

export const descuentoAdapter = (descuento: DescuentoBack): Descuento => {
  return {
    id: descuento.id_descuento,
    codigo: descuento.codigo,
    monto: descuento.monto,
    estado: descuento.estado,
    idAdmin: descuento.id_admin
  }
}
