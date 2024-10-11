import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { NewButton } from "../../../../components"
import { PaymentData, schemaPayment } from "../../model/formPayment.model"
import { InputField } from "../InputField"
import { CardCvv, CardNumber } from "./components"
import { MailIcon, UserOutlineIcon } from "../../../../icons"
import { usePriceTotal } from "../../../../hooks/usePriceTotal"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

export function FormPayment() {
  const { total } = usePriceTotal()
  const [loading, setLoading] = useState<boolean>(false)

  const { control, handleSubmit, setValue, formState: { errors } } = useForm<PaymentData>({
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
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success("Pago realizado exitosamente")
      const dialog = document.getElementById("dialog-payment") as HTMLDialogElement;
      if (dialog) {
        dialog.close();
      }
    }, 3000)
  }

  useEffect(() => {
    const dialog = document.getElementById("pay-proccess") as HTMLDialogElement
    if (loading) {
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [loading])

  return (
    <>
      <form className=" flex flex-col gap-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <CardNumber
            control={control}
            error={errors.numero_tarjeta}
            setValue={setValue}
          />
          <fieldset className="flex gap-6">
            <InputField<PaymentData>
              type="date"
              name="fecha_expiracion"
              control={control}
              error={errors.fecha_expiracion}
            />
            <CardCvv
              control={control}
              error={errors.cvv}
              setValue={setValue}
            />
          </fieldset>
          <fieldset className="flex gap-6">
            <InputField<PaymentData>
              type="text"
              name="nombres"
              control={control}
              placeholder="Nombres"
              error={errors.nombres}
              icon=<UserOutlineIcon className="text-zinc-400" />

            />
            <InputField<PaymentData>
              type="text"
              name="apellidos"
              control={control}
              placeholder="Apellidos"
              error={errors.apellidos}
              icon=<UserOutlineIcon className="text-zinc-400" />
            />
          </fieldset>
          <InputField<PaymentData>
            type="email"
            name="email"
            control={control}
            placeholder="Correo electrónico"
            error={errors.email}
            icon=<MailIcon className="text-zinc-400" />
          />
        </div>
        <NewButton className="text-white font-bold text-2xl py-4">Pagar S/ <span>{total.toFixed(2)}</span></NewButton>
      </form>
      <dialog id="pay-proccess" className="m-auto backdrop:backdrop-blur-2xl rounded-lg">
        <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-lg bg-primary-200 text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-y-2 border-white" />
          <p className="text-center text-xl font-bold">Realizando el pago...</p>
        </div>
      </dialog>
    </>
  )
}
