import { Container, NewButton } from "../../components";
import { TripInfoPanel } from "../../components/TripInfoPanel";

export function PassengerDetails() {
  return (
    <Container className="flex-1">
      <section className="flex flex-col items-center gap-8 md:items-start md:flex-row">
        <TripInfoPanel />
        <section className="w-full gap-7 flex flex-col ">
          <FormPassenger />
          <FormPassenger />
          <FormPassenger />
          <div className="px-4 py-3 flex flex-col gap-4">
            <p className="text-xl text-primary-800 font-bold">Datos de Contacto</p>
            <div className="flex items-center justify-center bg-primary-100 rounded px-2 py-6">
              <p className="text-lg text-center text-primary-700 font-medium text-pretty">
                Sus boletos y el recibo se enviarán a la dirección del correo electrónico a continuación.
              </p>
            </div>
            <form className="flex flex-col gap-5 text-white">
              <fieldset className="flex gap-5">
                <InputField />
                <InputField />
              </fieldset>
              <NewButton onClick={() => { }}>Continuar con el pago</NewButton>
            </form>
          </div>
        </section>
      </section>
    </Container >
  )
}

function FormPassenger() {
  return (
    <>
      <div className="px-4 py-3 flex flex-col gap-4">
        <div className="flex justify-between pr-4 text-xl font-bold text-primary-800">
          <p className="">Datos del pasajero 1</p>
          <p className="text-primary-500 flex gap-1">
            Asiento:
            <span className="text-primary-800">01</span>
          </p>
        </div>
        <form className="flex flex-col gap-3">
          <InputField />
          <fieldset className="flex gap-5">
            <InputField />
            <InputField />
          </fieldset>
          <fieldset className="flex gap-5">
            <InputField />
            <fieldset className="flex w-full p-2 border-2 border-transparent">
              <InputRadio />
              <InputRadio />
            </fieldset>
          </fieldset>
        </form>
      </div>
      <hr className="border-primary-200" />
    </>
  )
}

function InputField() {
  return (
    <input
      type="text"
      placeholder="Nombre"
      className="w-full p-2 border-[1px] border-primary-800 rounded-md"
    />
  )
}

function InputRadio() {
  return (
    <label className="flex items-center w-full gap-3">
      <input type="radio" name="sex" value="male" />
      <span>Femenino</span>
    </label>
  )
}
