import { MapPinIcon, CaretDownIcon } from "@icons"
import { useState } from "react"
import { Control, Controller, FieldError } from "react-hook-form"
import { SearchFormData } from "../model/formSearch.mode"
import { DropdownSearch } from "./DropdownSearch"
import { ErrorInput } from "./ErrorInput"
import { useCiudades } from "../hooks/useCiudades"

type OptProps = {
  value: string,
  label: string,
}

type InputSelectProps = {
  name: keyof SearchFormData
  control: Control<SearchFormData>
  error?: FieldError
}

export function InputSelect({ name, control, error }: InputSelectProps) {
  const [active, setActive] = useState<boolean>(false)
  const { data: ciudades } = useCiudades()

  const options: OptProps[] = ciudades.map(ciudad => ({
    value: ciudad.nombre.toLowerCase(),
    label: ciudad.nombre.toLowerCase()
  }))

  const handleActive = () => {
    setActive(!active)
  }

  return (
    <div className="relative w-full">
      <div
        className="flex justify-between items-center p-2 border-2 rounded-lg border-primary-50/50 cursor-pointer"
        onClick={handleActive}
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

