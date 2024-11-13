import { useForm } from "react-hook-form";
import { Form } from "../../../components";
import { descuentoData, schemaDescuento } from "../models/formDescuento.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { formField } from "../../../models/formField.model";
import { InputFieldLight } from "../../../../../components";

export function FormDescuento() {
  const { control, handleSubmit, formState: { errors } } = useForm<descuentoData>({
    resolver: zodResolver(schemaDescuento),
    defaultValues: {
      codigo: "",
      monto: "",
      estado: "",
      id_admin: ""
    }
  })

  const formFields: formField<descuentoData>[] = [
    { name: "codigo", type: "text", placeholder: "Codigo", label: "Codigo" },
    { name: "monto", type: "text", placeholder: "Monto", label: "Monto" },
    { name: "estado", type: "text", placeholder: "Estado", label: "Estado" },
    { name: "id_admin", type: "text", placeholder: "Id Admin", label: "Id Admin" }
  ]

  const onSubmit = (data: descuentoData) => {
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
          error={errors[name as keyof descuentoData]}
        />
      ))}


    </Form>
  )
}
