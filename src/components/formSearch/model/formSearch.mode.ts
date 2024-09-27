import { z } from "zod"

export const schemaFromSearch = z.object({
  ciudadOrigen: z.string().refine(val => val.toLowerCase() !== "ciudad de origen", {
    message: "Selecciona una ciudad válida",
  }),
  ciudadDestino: z.string().refine(val => val.toLowerCase() !== "ciudad de destino", {
    message: "Selecciona una ciudad válida",
  }),
  date: z.string().date()
})

export type SearchFormData = z.infer<typeof schemaFromSearch>
