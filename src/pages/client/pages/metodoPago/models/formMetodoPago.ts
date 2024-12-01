import { z } from 'zod'

export const schemaMetodoPago = z.object({
  nombre: z.string().min(3),
  numero_tarjeta: z.string().length(19, { message: "El número de tarjeta debe tener 16 dígitos" }),
  cvv: z.string().length(3, { message: "El CVV debe tener 3 dígitos" }),
  month: z.string().min(1, { message: "Mes de expiración" }),
  day: z.string().min(1, { message: "Día de expiración" }),
})

export type metodoPagoData = z.infer<typeof schemaMetodoPago>