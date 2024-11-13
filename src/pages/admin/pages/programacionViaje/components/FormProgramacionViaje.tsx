import { useForm } from "react-hook-form"
import { programacionViajeData, schemaProgramacionViaje } from "../models/formProgramacionViaje.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputFieldLight } from "../../../../../components"
import { Form } from "../../../components"
import { formField } from "../../../models/formField.model"

export function FormProgramacionViaje() {
  const { control, handleSubmit, formState: { errors } } = useForm<programacionViajeData>({
    resolver: zodResolver(schemaProgramacionViaje),
    defaultValues: {
      // fecha_salida: new Date().toISOString().split('T')[0],
      // hora_salida: new Date().toISOString().split('T')[1],
      // precio_nivel_uno: 0,
      // precio_nivel_dos: 0,
      // ruta: 0,
      // bus: 0,
      // chofer: 0
    }
  })

  const onSubmit = (data: programacionViajeData) => {
    console.log({ data })
  }

  const formFields: formField<programacionViajeData>[] = [
    { name: "fecha_salida", type: "date", placeholder: "Fecha de Salida", label: "Fecha de Salida" },
    { name: "hora_salida", type: "time", placeholder: "Hora de Salida", label: "Hora de Salida" },
    { name: "precio_nivel_uno", type: "number", placeholder: "Precio Nivel Uno", label: "Precio Nivel Uno" },
    { name: "precio_nivel_dos", type: "number", placeholder: "Precio Nivel Dos", label: "Precio Nivel Dos" },
    { name: "ruta", type: "number", placeholder: "Ruta", label: "Ruta" },
    { name: "bus", type: "number", placeholder: "Bus", label: "Bus" },
    { name: "chofer", type: "number", placeholder: "Chofer", label: "Chofer" }
  ];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map(({ name, type, placeholder, label }) => (
        <InputFieldLight
          key={name}
          type={type}
          control={control}
          name={name}
          placeholder={placeholder}
          label={label}
          error={errors[name as keyof programacionViajeData]}
        />
      ))}
    </Form>
  )
}
