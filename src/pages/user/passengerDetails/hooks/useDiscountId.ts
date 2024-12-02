import { useDataBack } from "../../../../hooks/useDataBack"
import { Error } from "../../../admin/components";
import { Descuento, DescuentoBack } from "../../../admin/pages/descuento/models/descuento.model"
import { descuentoIdAdapter } from "../adapters/descuentoId.adapter"

const api = import.meta.env.VITE_BACKEND_URL;

interface Props {
  codigo: string
}

export const useDiscountId = async ({ codigo }: Props) => {
  const response = await fetch(`${api}/discount/${codigo}`)
  if (response.status === 404) {
    return { success: false, error: 'Cupon ya utilizado' }
  }
  const data: DescuentoBack = await response.json()
  const dataAdap = descuentoIdAdapter(data)
  return { success: true, data: dataAdap }
}
