import { z } from "zod"

export const schemaFromSearch = z.object({
  ciudadOrigen: z.string(),
  ciudadDestino: z.string(),
  date: z.string().date()
})

export type SearchFormData = z.infer<typeof schemaFromSearch>
