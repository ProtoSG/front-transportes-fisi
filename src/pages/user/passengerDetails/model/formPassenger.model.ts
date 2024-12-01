import { z } from "zod"

const schemaPassenger = z.object({
  documento: z.string().min(8, "Debe contener 8 caracteres").max(8, "Debe contenter 8 caracteres"),
  nombres: z.string().min(1, "Los nombres son requeridos"),
  apellidos: z.string().min(1, "Los apellidos son requeridos"),
  fecha_nacimiento: z.string().min(1, "La fecha de nacimiento es requerida"),
  sexo: z.string().min(1, "El sexo es requerido"),
});

export type PassengerData = z.infer<typeof schemaPassenger>;

export const schemaFormPassenger = z.object({
  pasajeros: z.array(schemaPassenger),
  email: z.string().email("El email no es valido"),
  phone: z.string().min(1, "El telefono es requerido"),
});

export type FormPassengerData = z.infer<typeof schemaFormPassenger>;
