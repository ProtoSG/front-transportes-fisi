import { useForm } from "react-hook-form";
import { rutaData, schemaRuta } from "../models/formRuta.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../../components";
import { formField } from "../../../models/formField.model";
import { InputFieldLight } from "../../../../../components";

export function FormRuta() {
  const { control, handleSubmit, formState: { errors } } = useForm<rutaData>({
    resolver: zodResolver(schemaRuta),
    defaultValues: {
      duracion_estimada: "",
      distancia: "",
      estado: "",
      id_origen: "",
      id_destino: ""
    }
  })

  const onSubmit = (data: rutaData) => {
    console.log({ data })
  }

  const formFields: formField<rutaData>[] = [
    { name: "duracion_estimada", type: "text", placeholder: "Duración estimada", label: "Duración estimada" },
    { name: "distancia", type: "text", placeholder: "Distancia", label: "Distancia" },
    { name: "estado", type: "text", placeholder: "Estado", label: "Estado" },
    { name: "id_origen", type: "text", placeholder: "Origen", label: "Origen" },
    { name: "id_destino", type: "text", placeholder: "Destino", label: "Destino" }
  ]
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
          error={errors[name as keyof rutaData]}
        />
      ))}
    </Form>
  )
}
