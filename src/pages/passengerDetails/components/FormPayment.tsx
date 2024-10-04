import { SubmitHandler, useForm } from "react-hook-form"
import { PaymentData, schemaPayment } from "../model/formPayment.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputField } from "./InputField"
import { NewButton } from "../../../components"

export function FormPayment() {
  const { control, handleSubmit, formState: { errors } } = useForm<PaymentData>({
    resolver: zodResolver(schemaPayment),
    defaultValues: {
      numero_tarjeta: "",
      fecha_expiracion: "",
      cvv: "",
      nombres: "",
      apellidos: "",
      email: "",
    }
  })

  const onSubmit: SubmitHandler<PaymentData> = (data) => {
    console.log(data)
  }

  return (
    <form className="flex flex-col gap-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <InputField<PaymentData>
          name="numero_tarjeta"
          control={control}
          placeholder="N° de tarjeta"
          error={errors.numero_tarjeta}
        />
        <fieldset className="flex gap-6">
          <InputField<PaymentData>
            type="date"
            name="fecha_expiracion"
            control={control}
            error={errors.fecha_expiracion}
          />
          <InputField<PaymentData>
            type="text"
            name="cvv"
            control={control}
            placeholder="CVV"
            error={errors.cvv}
          />
        </fieldset>
        <fieldset className="flex gap-6">
          <InputField<PaymentData>
            type="text"
            name="nombres"
            control={control}
            placeholder="Nombres"
            error={errors.nombres}

          />
          <InputField<PaymentData>
            type="text"
            name="apellidos"
            control={control}
            placeholder="Apellidos"
            error={errors.apellidos}
          />
        </fieldset>
        <InputField<PaymentData>
          type="email"
          name="email"
          control={control}
          placeholder="Correo electrónico"
          error={errors.email}
        />
      </div>
      <NewButton className="text-white font-bold text-2xl py-4">Pagar S/ <span>105.00</span></NewButton>
    </form>
  )
}
