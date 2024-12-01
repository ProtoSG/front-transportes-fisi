import { z } from "zod";

export const schemaFormConfirmPayment = z.object({
  idTarjeta: z.number(),
});

export type FormConfirmPaymentData = z.infer<typeof schemaFormConfirmPayment>;
