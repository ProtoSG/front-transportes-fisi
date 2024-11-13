import { z } from "zod";

export const schemaDescuento = z.object({
  codigo: z.string(),
  monto: z.string(),
  estado: z.string(),
  id_admin: z.string()
})

export type descuentoData = z.infer<typeof schemaDescuento>
