import { Container, NewButton } from "../../components";
import { TripInfoPanel } from "../../components/TripInfoPanel";
import { useSeatsSelected } from "../../hooks/useSeatsSelected";
import { ConfirmData, FormPassenger, InputField } from "./components";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormPassengerData, schemaFormPassenger } from "./model/formPassenger.model";
import { useState } from "react";
import { MailIcon, PhoneIcon } from "../../icons";

export function PassengerDetails() {
  const { seats } = useSeatsSelected();
  const [nextStep, setNexStep] = useState(false);

  const { control, handleSubmit, formState: { errors }, setValue } = useForm<FormPassengerData>({
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
    console.log(data);
    setNexStep(true);

  }

  return (
    <Container className="flex-1">
      <section className="flex flex-col items-center gap-8 md:items-start md:flex-row">
        <TripInfoPanel />
        {
          nextStep ? (
            <ConfirmData />
          ) : (
            <form className="w-full gap-7 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              {
                seats.map((seat, index) => (
                  <FormPassenger
                    key={index}
                    index={index}
                    number={seat.numeroAsiento}
                    control={control}
                    setValue={setValue}
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
