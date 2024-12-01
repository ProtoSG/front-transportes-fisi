import { Descuento, DescuentoBack } from "../../../admin/pages/descuento/models/descuento.model"

export const descuentoIdAdapter = (descuento: DescuentoBack): Descuento => {
  return {
    id: descuento.id_descuento,
    codigo: descuento.codigo,
    monto: descuento.monto,
    estado: descuento.estado,
    idAdmin: descuento.id_admin,
  }
}
