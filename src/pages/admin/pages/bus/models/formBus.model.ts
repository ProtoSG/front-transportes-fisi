import { z } from "zod";

export const schemaBus = z.object({
  asientos: z.string(),
  placa: z.string(),
  marca: z.string(),
  niveles: z.string(),
  id_tipo_servicio_bus: z.string()
})

export type busData = z.infer<typeof schemaBus>
