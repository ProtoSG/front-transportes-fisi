import { useState } from "react";
import { Container, NewButton } from "../../components";
import { TripInfoPanel } from "../../components/TripInfoPanel";
import { useSeatsSelected } from "../../hooks/useSeatsSelected";
import { FormPassenger, InputField } from "./components";

export function PassengerDetails() {
  const { seats } = useSeatsSelected();


  return (
    <Container className="flex-1">
      <section className="flex flex-col items-center gap-8 md:items-start md:flex-row">
        <TripInfoPanel />
        <section className="w-full gap-7 flex flex-col ">
          {
            seats.map((seat, index) => (
              <FormPassenger
                key={index}
                index={index}
                number={seat.numero}
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
            <form className="flex flex-col gap-5 text-white" onSubmit={() => { }}>
              <fieldset className="flex gap-5">
                <InputField placeholder="Correo electrónico" name="email" />
                <InputField placeholder="Teléfono" name="phone" />
              </fieldset>
              <NewButton type="submit">Continuar con el pago</NewButton>
            </form>
          </div>
        </section>
      </section>
    </Container >
  )
}
