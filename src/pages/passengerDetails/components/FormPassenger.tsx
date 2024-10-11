import { Control, FieldErrors, UseFormSetValue, useWatch } from "react-hook-form";
import { InputField } from "./InputField";
import { InputRadio } from "./InputRadio";
import { FormPassengerData } from "../model/formPassenger.model";
import { NewButton, SkeletonInput } from "../../../components";
import { useDataDni } from "../hooks/useDataDni";
import { useEffect } from "react";

interface FormPassengerProps {
  index: number;
  number: number;
  control: Control<FormPassengerData>;
  error: FieldErrors<FormPassengerData>;
  setValue?: UseFormSetValue<FormPassengerData>;
}

export function FormPassenger({ index, number, control, error, setValue }: FormPassengerProps) {

  const dni = useWatch({
    control,
    name: `pasajeros.${index}.documento`,
  });

  const { data, loading, getData } = useDataDni();

  const handleBuscarDatos = async () => {
    await getData(dni);
  };

  useEffect(() => {
    if (data) {
      setValue?.(`pasajeros.${index}.nombres`, data.nombres as string);
      setValue?.(`pasajeros.${index}.apellidos`, data.apellidos as string);
    }
  }, [data]);

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
          <fieldset className="grid grid-cols-2 gap-5 ">
            <div className="">
              <InputField
                name={`pasajeros.${index}.documento`}
                placeholder="N° de Documento"
                control={control}
                error={error.pasajeros?.[index]?.documento}
              />
            </div>
            <NewButton disabled={loading} type="button" className={`text-white ${loading ? "bg-primary-600" : ""}`}
              onClick={() => {
                handleBuscarDatos();
              }}
            >
              {loading ? "Buscando..." : "Buscar Datos"}
            </NewButton>
          </fieldset>
          <fieldset className="flex gap-5 flex-col">
            {loading
              ? <SkeletonInput />
              : <InputField
                name={`pasajeros.${index}.nombres`}
                placeholder="Nombres"
                control={control}
                error={error.pasajeros?.[index]?.nombres}
                readonly
              />
            }
            {loading
              ? <SkeletonInput />
              : <InputField
                name={`pasajeros.${index}.apellidos`}
                placeholder="Apellidos"
                control={control}
                error={error.pasajeros?.[index]?.apellidos}
                readonly
              />
            }
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
