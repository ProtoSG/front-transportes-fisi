import { useForm } from "react-hook-form";
import { Form } from "../../../components";
import { asientoData, schemaAsiento } from "../models/formAsiento.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { formField } from "../../../models/formField.model";
import { InputFieldLight } from "../../../../../components";

export function FormAsiento() {
  const { control, handleSubmit, formState: { errors } } = useForm<asientoData>({
    resolver: zodResolver(schemaAsiento),
    defaultValues: {
      nivel: "",
      numero: "",
      id_bus: ""
    }
  })

  const formFields: formField<asientoData>[] = [
    { name: "nivel", type: "text", placeholder: "Nivel", label: "Nivel" },
    { name: "numero", type: "text", placeholder: "Numero", label: "Numero" },
    { name: "id_bus", type: "text", placeholder: "Id Bus", label: "Id Bus" }
  ]

  const onSubmit = (data: asientoData) => {
    console.log({ data })
  }

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
          error={errors[name as keyof asientoData]}
        />
      ))}
    </Form>
  )
}
