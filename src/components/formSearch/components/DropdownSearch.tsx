import { ControllerRenderProps } from "react-hook-form"
import { SearchFormData } from "../model/formSearch.mode"
import { useState } from "react"
import { Departamento } from "../model/departamento.model"
import { useDestinosList } from "../hooks/useDestinosList"

interface DropdownSearchProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  field: ControllerRenderProps<SearchFormData>
  options: Departamento[]
}

export function DropdownSearch({ setActive, field, options }: DropdownSearchProps) {
  const [search, setSearch] = useState<string>('')
  const { setOrigenDestino } = useDestinosList()

  const handleChangeDestino = (data: string) => {
    console.log("DATA: ", data)
    setOrigenDestino(data)
  }

  const searchOptions = options.filter(opt => opt.nombre.toLowerCase().includes(search.toLowerCase()))

  return (
    <div
      className="absolute w-full left-0 backdrop-blur-2xl overflow-y-scroll min-h-48 max-h-48 -top-[460%] flex flex-col text-primary-900 bg-primary-100 rounded-lg"
    >
      <div className="p-2 sticky top-0 bg-primary-100">
        <input
          type="text"
          placeholder="Lima"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          className="w-full  bg-primary-50 border-2 border-primary-700 rounded-lg p-2 focus:outline-none"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      {searchOptions.map((opt, index) => (
        <span
          key={index}
          className="hover:bg-primary-400 py-2 px-4 transition-colors hover:cursor-pointer capitalize"
          onClick={() => {
            field.onChange(opt.nombre);
            setActive(false);
            handleChangeDestino(opt.nombre)
          }}
        >
          {opt.nombre}
        </span>
      ))}
    </div>

  )
}
