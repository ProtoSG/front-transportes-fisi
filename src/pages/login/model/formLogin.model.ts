import { z } from "zod";

export const schemaLogin = z.object({
  username: z.string().min(3, "Falta el nombre de usuario"),
  password: z.string().min(8, "La longitud mínima  es de 8 caracteres")
})

export type LoginData = z.infer<typeof schemaLogin>
