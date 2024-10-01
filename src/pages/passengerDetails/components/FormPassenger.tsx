import { InputField } from "./InputField";
import { InputRadio } from "./InputRadio";

interface FormPassengerProps {
  index: number;
  number: number;
}

export function FormPassenger({ index, number }: FormPassengerProps) {
  return (
    <>
      <div className="px-4 py-3 flex flex-col gap-4">
        <div className="flex justify-between pr-4 text-xl font-bold text-primary-800">
          <p className="">Datos del pasajero {index + 1}</p>
          <p className="text-primary-500 flex gap-1">
            Asiento:
            <span className="text-primary-800">{number}</span>
          </p>
        </div>
        <form className="flex flex-col gap-3">
          <InputField
            name="documento"
            placeholder="N° de Documento"
          />
          <fieldset className="flex gap-5">
            <InputField
              name="nombres"
              placeholder="Nombres"
            />
            <InputField
              name="apellidos"
              placeholder="Apellidos"
            />
          </fieldset>
          <fieldset className="flex gap-5">
            <InputField
              type="date"
              name="fecha_nacimiento"
            />
            <fieldset className="flex w-full p-2 border-2 border-transparent">
              <InputRadio value="femenino" label="Femenino" checked />
              <InputRadio value="masculino" label="Masculino" />
            </fieldset>
          </fieldset>
        </form>
      </div>
      <hr className="border-primary-200" />
    </>
  )
}
