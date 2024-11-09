import { z } from "zod";

export const schemaProgramacionViaje = z.object({
  fecha_salida: z.string().date(),
  hora_salida: z.string().time(),
  precio_nivel_uno: z.number(),
  precio_nivel_dos: z.number(),
  ruta: z.number(),
  bus: z.number(),
  chofer: z.number()
})

export type programacionViajeData = z.infer<typeof schemaProgramacionViaje>
