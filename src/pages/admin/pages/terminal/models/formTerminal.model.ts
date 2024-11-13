import { z } from "zod";

export const schemaTerminal = z.object({
  nombre: z.string(),
  departamento: z.string(),
  provincia: z.string()
})

export type terminalData = z.infer<typeof schemaTerminal>
