import { useForm } from "react-hook-form"
import { Form } from "../../../components"
import { schemaTerminal, terminalData } from "../models/formTerminal.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { formField } from "../../../models/formField.model"
import { InputFieldLight } from "../../../../../components"

export function FormTerminal() {
  const { control, handleSubmit, formState: { errors } } = useForm<terminalData>({
    resolver: zodResolver(schemaTerminal),
    defaultValues: {
      nombre: "",
      departamento: "",
      provincia: ""
    }
  })

  const onSubmit = (data: terminalData) => {
    console.log({ data })
  }

  const formFields: formField<terminalData>[] = [
    { name: "nombre", type: "text", placeholder: "Nombre", label: "Nombre" },
    { name: "departamento", type: "text", placeholder: "Departamento", label: "Departamento" },
    { name: "provincia", type: "text", placeholder: "Provincia", label: "Provincia" }
  ]

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map(({ name, type, placeholder, label }) => (
        <InputFieldLight
          key={name}
          type={type}
          name={name}
          placeholder={placeholder}
          control={control}
          label={label}
          error={errors[name as keyof terminalData]}
        />
      ))}
    </Form>
  )
}
