import { z } from "zod";

export const schemaServicio = z.object({
  servicio: z
    .string()
    .min(1, "El servicio es obligatorio")
    .max(30, "El servicio no puede exceder los 30 caracteres")
})

export type servicioData = z.infer<typeof schemaServicio>
