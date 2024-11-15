import { useForm } from "react-hook-form";
import { Form } from "../../../components";
import { useEditServicio } from "../hooks/useEditServicio";
import { useServicio } from "../hooks/useServicio";
import { schemaServicio, servicioData } from "../models/formServicio.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { formField } from "../../../models/formField.model";
import { toast } from "sonner";
import { ServicioCreate } from "../models/servicio.model";
import { createServicio, updateServicio } from "../services/servicio.service";
import { InputFieldLight } from "../../../../../components";

export function FormServicio() {
  const { fetchData } = useServicio()

  const { isEdit, data } = useEditServicio()

  const { control, handleSubmit, formState: { errors }, reset } = useForm<servicioData>({
    resolver: zodResolver(schemaServicio),
    defaultValues: {
      servicio: ""
    }
  })

  useEffect(() => {
    if (data) {
      reset({ servicio: data.servicio || "" })
    }
  }, [data, reset])

  const formFields: formField<servicioData>[] = [
    { name: "servicio", type: "text", placeholder: "Servicio", label: "Servicio" }
  ]

  const onSubmit = async (servicio: servicioData) => {
    const body: ServicioCreate = {
      servicio: servicio.servicio
    }

    if (isEdit && data) {
      const { success, message } = await updateServicio(body, data.id)
      success ? toast.success(message) : toast.error(message)
    } else {
      const { success, message } = await createServicio(body)
      success ? toast.success(message) : toast.error(message)
    }

    fetchData()
    handleCloseDialog()
  }

  const handleCloseDialog = () => {
    const dialog = document.getElementById('dialog-servicio') as HTMLDialogElement
    if (dialog) dialog.close()
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
          error={errors[name as keyof ServicioCreate]}
        />
      ))}
    </Form>
  )
}
