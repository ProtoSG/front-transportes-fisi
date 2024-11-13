import { z } from "zod";

export const schemaProgramacionViaje = z.object({
  fecha_salida: z.string().date(),
  hora_salida: z.string(),
  precio_nivel_uno: z.string(),
  precio_nivel_dos: z.string(),
  ruta: z.string(),
  bus: z.string(),
  chofer: z.string()
})

export type programacionViajeData = z.infer<typeof schemaProgramacionViaje>
