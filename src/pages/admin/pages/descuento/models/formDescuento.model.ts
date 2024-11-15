import { z } from "zod";

export const schemaDescuento = z.object({
  codigo: z
    .string()
    .min(1, "El código es obligatorio")
    .max(20, "El código no puede exceder los 20 caracteres"),
  monto: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "El monto debe ser un número positivo",
    }),
  estado: z
    .string()
    .min(1, "El estado es obligatorio")
    .refine((val) => ["activo", "inactivo"].includes(val), {
      message: "El estado debe ser 'activo' o 'inactivo'",
    }),
})

export type descuentoData = z.infer<typeof schemaDescuento>
