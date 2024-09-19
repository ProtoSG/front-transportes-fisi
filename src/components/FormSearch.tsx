import { useState } from "react";
import { ArrowLargeIcon, CalendarIcon, CaretDownIcon } from "../icons";
import { InputSelect } from "./InputSelect";

export function FormSearch() {
  const [inputType, setInputType] = useState('text');
  const [active, setActive] = useState(true);

  const handleDesactive = () => {
    setInputType('date')
    setActive(false)
  }

  const handleActive = () => {
    setInputType('text')
    setActive(true)
  }

  return (
    <div className="flex flex-col gap-3 w-full backdrop-blur-lg px-4 py-5 rounded-t-lg">
      <p className="font-semibold text-lg">Busca tu próximo destino</p>
      <form className="w-full flex gap-3">
        <InputSelect />
        <InputSelect />
        <div className="border-2 px-2 border-primary-50/50 rounded-lg flex w-full items-center">
          <input
            type={inputType}
            onFocus={handleDesactive}
            onBlur={handleActive}
            placeholder="Fecha de Ida"
            className="bg-transparent w-full focus:outline-none "
          />
          {active && (
            <CalendarIcon />
          )}
        </div>
      </form>
    </div>
  )
}
