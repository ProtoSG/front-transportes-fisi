import { ConfirmData, FormPassenger, InputField } from "./components";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormPassengerData, schemaFormPassenger } from "./model/formPassenger.model";
import { useState } from "react";
import { Container, NewButton } from "../../../components";
import { TripInfoPanel } from "../../../components/TripInfoPanel";
import { useSeatsSelected } from "../../../hooks/useSeatsSelected";
import { MailIcon, PhoneIcon } from "../../../icons";
import { toast } from "sonner";
import { postPasajero } from "./services/pasajero.service";
import { PasajeroBack } from "./model/pasajero.model";
import { useTransactionData } from "../../../hooks/useTransactionData";

export function PassengerDetails() {
  const { seats, updateSeat } = useSeatsSelected();
  const [nextStep, setNexStep] = useState(false);
  const { setCorreo, setTelefono } = useTransactionData()

  const { control, handleSubmit, formState: { errors } } = useForm<FormPassengerData>({
    resolver: zodResolver(schemaFormPassenger),
    defaultValues: {
      pasajeros: seats.map(() => ({
        documento: '',
        nombres: '',
        apellidos: '',
        fecha_nacimiento: '',
        sexo: 'femenino',
      })),
      email: '',
      phone: '',
    },
  });

  const onSubmit: SubmitHandler<FormPassengerData> = (data) => {
    data.pasajeros.forEach(async (pasajero, index) => {
      const body: PasajeroBack = {
        dni: pasajero.documento,
        nombre: pasajero.nombres,
        apellido_pat: pasajero.apellidos.split(" ")[0],
        apellido_mat: pasajero.apellidos.split(" ")[1] || " ",
        fecha_nacimiento: pasajero.fecha_nacimiento,
        sexo: pasajero.sexo,
      }
      console.log(body)
      const { success, message, idPasajero } = await postPasajero({ body })
      if (!success) return toast.error(message)
      toast.success(message)

      const seat = seats[index]
      updateSeat(seat.idAsiento, idPasajero)

      setCorreo(data.email)
      setTelefono(data.phone)

      setNexStep(true);
    })
  }

  return (
    <Container className="flex-1">
      <section className="flex flex-col items-center gap-8 md:items-start md:flex-row">
        <TripInfoPanel />
        {
          nextStep ? (
            <ConfirmData />
          ) : (
            <form className="relative w-full gap-7 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              {
                seats.map((seat, index) => (
                  <FormPassenger
                    key={index}
                    index={index}
                    number={seat.numeroAsiento}
                    control={control}
                    error={errors}
                  />
                ))
              }
              <div className="px-4 py-3 flex flex-col gap-4">
                <p className="text-xl text-primary-800 font-bold">Datos de Contacto</p>
                <div className="flex items-center justify-center bg-primary-100 rounded px-2 py-6">
                  <p className="text-lg text-center text-primary-700 font-medium text-pretty">
                    Sus boletos y el recibo se enviarán a la dirección del correo electrónico a continuación.
                  </p>
                </div>
                <div className="flex flex-col gap-5 text-white" onSubmit={() => { }}>
                  <fieldset className="flex gap-5 text-black relative">
                    <InputField
                      type="email"
                      placeholder="Correo electrónico"
                      name="email"
                      control={control}
                      error={errors.email}
                      icon=<MailIcon className="text-zinc-400" />
                    />
                    <InputField
                      placeholder="Teléfono"
                      name="phone"
                      control={control}
                      error={errors.phone}
                      icon=<PhoneIcon className="text-zinc-400" />
                    />
                  </fieldset>
                  <NewButton type="submit">Continuar con el pago</NewButton>
                </div>
              </div>
            </form>
          )
        }
      </section>
    </Container >
  )
}
