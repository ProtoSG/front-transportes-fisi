import { useForm } from "react-hook-form";
import { Form } from "../../../components";
import { busData, schemaBus } from "../models/formBus.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { formField } from "../../../models/formField.model";
import { InputFieldLight } from "../../../../../components";

export function FormBus() {
  const { control, handleSubmit, formState: { errors } } = useForm<busData>({
    resolver: zodResolver(schemaBus),
    defaultValues: {
      asientos: "",
      placa: "",
      marca: "",
      niveles: "",
      id_tipo_servicio_bus: ""
    }
  })

  const onSubmit = (data: busData) => {
    console.log({ data })
  }

  const formFields: formField<busData>[] = [
    { name: "asientos", type: "text", placeholder: "Asientos", label: "Asientos" },
    { name: "placa", type: "text", placeholder: "Placa", label: "Placa" },
    { name: "marca", type: "text", placeholder: "Marca", label: "Marca" },
    { name: "niveles", type: "text", placeholder: "Niveles", label: "Niveles" },
    { name: "id_tipo_servicio_bus", type: "text", placeholder: "Tipo Servicio Bus", label: "Tipo Servicio Bus" }
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
          error={errors[name as keyof busData]}
        />
      ))}
    </Form>
  )
}
