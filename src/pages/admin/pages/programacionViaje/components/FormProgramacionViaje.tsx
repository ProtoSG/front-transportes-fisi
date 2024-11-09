import { useForm } from "react-hook-form"
import { programacionViajeData, schemaProgramacionViaje } from "../../../models/formProgramacionViaje.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputFieldLight } from "../../../../../components"
import { CalendarIcon } from "../../../../../icons"

export function FormProgramacionViaje() {
  const { control, handleSubmit, formState: { errors } } = useForm<programacionViajeData>({
    resolver: zodResolver(schemaProgramacionViaje),
    defaultValues: {

    }
  })

  const onSubmit = (data: programacionViajeData) => {
    console.log({ data })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <InputFieldLight
        type="date"
        control={control}
        name="fecha_salida"
        placeholder="Fecha de Salida"
        label="Fecha de Salida"
        error={errors.fecha_salida}
      />
      <InputFieldLight
        type="time"
        control={control}
        name="hora_salida"
        placeholder="Hora de Salida"
        label="Hora de Salida"
        error={errors.hora_salida}
      />

    </form>
  )
}
