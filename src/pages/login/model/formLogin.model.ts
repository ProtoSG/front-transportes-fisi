import { z } from "zod";

export const schemaLogin = z.object({
  username: z.string().min(1, "Falta el nombre de usuario"),
  password: z.string().min(1, "Falta la contraseña")
})

export type LoginData = z.infer<typeof schemaLogin>
