import { useNavigate } from "react-router-dom";
import { useDataTripInfo } from "../hooks/useDataTripInfo";
import { InputSelect } from "./InputSelect";
import { NewButton } from "./NewButton";

export function FormSearch() {
  const { ciudadOrigen, setCiudadOrigen, ciudadDestino, setCiudadDestino } = useDataTripInfo()

  console.log(ciudadOrigen, ciudadDestino)

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/search-results")
  }

  return (
    <div className="flex flex-col gap-3 backdrop-blur-lg px-4 py-5 rounded-t-lg">
      <p className="font-semibold text-lg">Busca tu próximo destino</p>
      <form className="w-full flex flex-col lg:flex-row gap-3">
        <fieldset className="flex flex-col w-full sm:flex-row gap-3">
          <InputSelect
            setValue={setCiudadOrigen}
          />
          <InputSelect
            setValue={setCiudadDestino}
          />
        </fieldset>
        <fieldset className="flex flex-col sm:flex-row w-full gap-3">
          <input
            type="date"
            className="bg-transparent text-sm lg:text-base w-full focus:outline-none border-2 p-2 border-primary-50/50 rounded-lg"
          />
          <NewButton
            onClick={handleNavigate}
          >
            Buscar
          </NewButton>
        </fieldset>
      </form>
    </div>
  )
}
