import { MapPinIcon, CaretDownIcon } from "@icons"
import { useEffect, useState } from "react"
import { Control, Controller, FieldError, useFormContext } from "react-hook-form"
import { SearchFormData } from "../model/formSearch.mode"
import { DropdownSearch } from "./DropdownSearch"
import { ErrorInput } from "./ErrorInput"
import { useDepartamentosOrigen } from "../hooks/useDepartamentosOrigen"
import { Departamento } from "../model/departamento.model"
import { getDestinos } from "../services/departamento.service"
import { useDestinosList } from "../hooks/useDestinosList"


type InputSelectProps = {
  name: keyof SearchFormData
  control: Control<SearchFormData>
  error?: FieldError
  origen?: boolean
}

export function InputSelect({ name, control, error, origen }: InputSelectProps) {
  const [active, setActive] = useState<boolean>(false)
  const { origenDestino, destinos, setDestinos } = useDestinosList()
  const { data: departamentosOrigen } = useDepartamentosOrigen()

  const handleActive = () => {
    setActive(!active)
  }

  const handleDestinos = async () => {
    const destinos = await getDestinos(origenDestino)
    setDestinos(destinos)
  }

  const options: Departamento[] = origen ? departamentosOrigen : destinos

  return (
    <div className="relative w-full">
      <div
        className="flex justify-between items-center p-2 border-2 rounded-lg border-primary-50/50 cursor-pointer"
        onClick={() => {
          !origen && handleDestinos()
          handleActive()
        }}
      >
        <div className="flex gap-2 items-center">
          <MapPinIcon />
          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <>
                <input
                  type="text"
                  className="text-sm lg:text-base bg-transparent focus:outline-none capitalize"
                  {...field}
                  value={field.value}
                  readOnly
                />
                {active && (
                  <DropdownSearch
                    setActive={setActive}
                    field={field}
                    options={options}
                  />
                )}
                <ErrorInput error={error} />
              </>
            )}
          />
        </div>
        <CaretDownIcon />
      </div>
    </div>
  )
}

