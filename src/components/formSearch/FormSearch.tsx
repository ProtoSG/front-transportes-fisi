import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchFormData, schemaFromSearch } from "./model/formSearch.mode";
import { useDataTripInfo } from "../../hooks/useDataTripInfo";
import { NewButton } from "../NewButton";
import { InputSelect } from "./components";
import { ErrorInput } from "./components/ErrorInput";

export function FormSearch() {
  const { setCiudadOrigen, setCiudadDestino, setFechaSalida } = useDataTripInfo()

  const { control, handleSubmit, formState: { errors } } = useForm<SearchFormData>({
    resolver: zodResolver(schemaFromSearch),
    defaultValues: {
      ciudadOrigen: "Ciudad de Origen",
      ciudadDestino: "Ciudad de Destino",
      date: ""
    }
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SearchFormData> = (data) => {
    console.log(data)
    setCiudadOrigen(data.ciudadOrigen)
    setCiudadDestino(data.ciudadDestino)
    setFechaSalida(data.date)
    navigate("/search-results?origen=" + data.ciudadOrigen + "&destino=" + data.ciudadDestino + "&fecha=" + data.date)
  }

  return (
    <div className="flex flex-col gap-3 backdrop-blur-lg px-4 py-5 rounded-t-lg">
      <p className="font-semibold text-lg">Busca tu próximo destino</p>
      <form className="w-full flex flex-col lg:flex-row gap-3" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col w-full sm:flex-row gap-3">
          <InputSelect
            name="ciudadOrigen"
            control={control}
            error={errors.ciudadOrigen}
            origen
          />
          <InputSelect
            name="ciudadDestino"
            control={control}
            error={errors.ciudadDestino}
          />
        </fieldset>
        <div className="flex flex-col sm:flex-row w-full gap-3">
          <div className="w-full relative">
            <Controller
              control={control}
              name="date"
              render={({ field }) =>
                <input
                  type="date"
                  className="bg-transparent text-sm lg:text-base w-full focus:outline-none border-2 p-2 border-primary-50/50 rounded-lg"
                  {...field}
                  value={field.value}
                />
              }
            />
            <ErrorInput error={errors.date} />
          </div>
          <NewButton type="submit">
            Buscar
          </NewButton>
        </div>
      </form>
    </div>
  )
}
