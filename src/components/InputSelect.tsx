import { MapPinIcon, CaretDownIcon } from "@icons"
import { useState } from "react"

type OptProps = {
  value: string,
  label: string,
}

const options: OptProps[] = [
  { value: '', label: 'Ciudad de Origen' },
  { value: 'lima', label: 'Lima' },
  { value: 'peru', label: 'Perú' },
  { value: 'cusco', label: 'Cusco' },
  { value: 'cusco', label: 'Cusco' },
  { value: 'cusco', label: 'Cusco' },
  { value: 'cusco', label: 'Cusco' },
]

export function InputSelect() {
  const [active, setActive] = useState<boolean>(false)
  const [selected, setSelected] = useState<OptProps>(options[0])
  const [search, setSearch] = useState<string>("")

  const handleActive = () => {
    setActive(!active)
  }

  const handleChangeSelected = (opt: OptProps) => {
    setSelected(opt)
    setActive(false)
  }

  const searchOptions = options.filter(opt => opt.value.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="relative w-full">
      <div
        className="flex justify-between items-center p-2 border-2 rounded-lg border-primary-50/50 cursor-pointer"
        onClick={handleActive}
      >
        <div className="flex gap-2 items-center">
          <MapPinIcon />
          <span className="text-sm lg:text-base">{selected.label}</span>
        </div>
        <CaretDownIcon />
      </div>
      {
        active && (
          <div className="absolute w-full overflow-y-scroll min-h-48 max-h-48 -top-[460%] flex flex-col text-primary-900 bg-primary-100 rounded-lg">
            <form className="p-2 sticky top-0 bg-primary-100">
              <input
                type="text"
                placeholder="Lima"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full  bg-primary-50 border-2 border-primary-700 rounded-lg p-2 focus:outline-none"
              />
            </form>
            {
              searchOptions.map((opt, index) => {
                if (opt.value !== '')
                  return (
                    <span
                      key={index}
                      className="hover:bg-primary-400 py-2 px-4 transition-colors hover:cursor-pointer"
                      onClick={() => handleChangeSelected(opt)}
                    >
                      {opt.label}
                    </span>
                  )
              }
              )
            }
          </div>
        )
      }
    </div>
  )
}
