import { z } from "zod";

export const schemaConductor = z.object({
  nombre: z.string(),
  apellido_pat: z.string(),
  apellido_mat: z.string(),
  dni: z.string(),
  sexo: z.string()
})

export type conductorData = z.infer<typeof schemaConductor>
