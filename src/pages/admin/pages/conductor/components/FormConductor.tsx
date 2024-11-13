import { useForm } from "react-hook-form";
import { Form } from "../../../components";
import { conductorData, schemaConductor } from "../models/formConductor.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputFieldLight } from "../../../../../components";
import { formField } from "../../../models/formField.model";

export function FormConductor() {
  const { control, handleSubmit, formState: { errors } } = useForm<conductorData>({
    resolver: zodResolver(schemaConductor),
    defaultValues: {
      nombre: "",
      apellido_pat: "",
      apellido_mat: "",
      dni: "",
      sexo: ""
    }
  })

  const formFields: formField<conductorData>[] = [
    { name: "nombre", type: "text", placeholder: "Nombre", label: "Nombre" },
    { name: "apellido_pat", type: "text", placeholder: "Apellido Pat", label: "Apellido Pat" },
    { name: "apellido_mat", type: "text", placeholder: "Apellido Mat", label: "Apellido Mat" },
    { name: "dni", type: "text", placeholder: "Dni", label: "Dni" },
    { name: "sexo", type: "text", placeholder: "Sexo", label: "Sexo" }
  ]

  const onSubmit = (data: conductorData) => {
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
          error={errors[name as keyof conductorData]}
        />
      ))}
    </Form>
  )
}
