import { z } from "zod";

export const schemaAsiento = z.object({
  nivel: z.string(),
  numero: z.string(),
  id_bus: z.string()
})

export type asientoData = z.infer<typeof schemaAsiento>
