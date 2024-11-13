import { z } from "zod";

export const schemaRuta = z.object({
  duracion_estimada: z.string(),
  distancia: z.string(),
  estado: z.string(),
  id_origen: z.string(),
  id_destino: z.string()
})

export type rutaData = z.infer<typeof schemaRuta>
