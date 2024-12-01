import { z } from "zod";

export const schemaRuta = z.object({
  duracion_estimada: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/),
  distancia: z.string(),
  estado: z.string(),
  id_origen: z.string(),
  id_destino: z.string()
})

export type rutaData = z.infer<typeof schemaRuta>
