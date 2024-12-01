import { Control, FieldErrors, UseFormSetValue, useWatch } from "react-hook-form";
import { InputField } from "./InputField";
import { InputRadio } from "./InputRadio";
import { FormPassengerData } from "../model/formPassenger.model";
import { IdIcon, UserOutlineIcon } from "../../../../icons";

interface FormPassengerProps {
  index: number;
  number: number;
  control: Control<FormPassengerData>;
  error: FieldErrors<FormPassengerData>;
}

export function FormPassenger({ index, number, control, error }: FormPassengerProps) {

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
        <div className="flex flex-col gap-3">
          <div className="">
            <InputField
              name={`pasajeros.${index}.documento`}
              placeholder="N° de Documento"
              control={control}
              error={error.pasajeros?.[index]?.documento}
              icon=<IdIcon className="text-zinc-400" />
            />
          </div>
          <fieldset className="flex gap-5 flex-col">
            <InputField
              name={`pasajeros.${index}.nombres`}
              placeholder="Nombres"
              control={control}
              error={error.pasajeros?.[index]?.nombres}
              icon=<UserOutlineIcon className="text-zinc-400" />
            />
            <InputField
              name={`pasajeros.${index}.apellidos`}
              placeholder="Apellidos"
              control={control}
              error={error.pasajeros?.[index]?.apellidos}
              icon=<UserOutlineIcon className="text-zinc-400" />
            />
          </fieldset>
          <fieldset className="flex gap-5">
            <InputField
              type="date"
              name={`pasajeros.${index}.fecha_nacimiento`}
              control={control}
              error={error.pasajeros?.[index]?.fecha_nacimiento}
            />
            <fieldset className="flex w-full p-2 border-2 border-transparent">
              <InputRadio
                value="femenino"
                label="Femenino"
                name={`pasajeros.${index}.sexo`}
                control={control}
              />
              <InputRadio
                value="masculino"
                label="Masculino"
                name={`pasajeros.${index}.sexo`}
                control={control}
              />
            </fieldset>
          </fieldset>
        </div>
      </div>
      <hr className="border-primary-200" />
    </>
  )
}
