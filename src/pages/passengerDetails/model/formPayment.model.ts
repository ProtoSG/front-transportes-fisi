import { z } from "zod";

export const schemaPayment = z.object({
  numero_tarjeta: z.string().min(1, "El numero de tarjeta es requerido"),
  fecha_expiracion: z.string().min(1, "La fecha de expiracion es requerida"),
  cvv: z.string().min(1, "El cvv es requerido"),
  nombres: z.string().min(1, "El nombre de la tarjeta es requerido"),
  apellidos: z.string().min(1, "El apellidos de la tarjeta es requerido"),
  email: z.string().email("El email no es valido"),
})

export type PaymentData = z.infer<typeof schemaPayment>;
