import { useForm } from "react-hook-form";
import { Form } from "../../../components";
import { asientoData, schemaAsiento } from "../models/formAsiento.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { formField } from "../../../models/formField.model";
import { InputFieldLight } from "../../../../../components";
import { useAsiento } from "../hooks/useAsiento";
import { useEditAsiento } from "../hooks/useEditAsiento";
import { useEffect } from "react";
import { AsientoCreate } from "../models/asiento.model";
import { toast } from "sonner";
import { createAsiento, updateAsiento } from "../services/asiento.service";

export function FormAsiento() {
  const { fetchData } = useAsiento()
  const { isEdit, data } = useEditAsiento()

  const { control, handleSubmit, formState: { errors },reset } = useForm<asientoData>({
    resolver: zodResolver(schemaAsiento),
    defaultValues: {
      nivel: "",
      numero: "",
      id_bus: ""
    }
  })

  useEffect(() => {
    if (data) {
      reset({
        nivel: data.nivel.toString() || "",
        numero: data.numero.toString() || "",
        id_bus: data.id_bus.toString() || ""
        })
    }
  }, [data, reset])

  const formFields: formField<asientoData>[] = [
    { name: "nivel", type: "text", placeholder: "Nivel", label: "Nivel" },
    { name: "numero", type: "text", placeholder: "Numero", label: "Numero" },
    { name: "id_bus", type: "text", placeholder: "Id Bus", label: "Id Bus" }
  ]

  const onSubmit = async ( asiento : asientoData) => {
    const body : AsientoCreate={
      nivel: Number(asiento.nivel) ,
      numero:Number(asiento.numero ) ,
      id_bus: Number(asiento.id_bus)
    }
    if (isEdit && data) {
      const { success, message } = await updateAsiento(body, data.id)
      success ? toast.success(message) : toast.error(message)
    } else {
      const { success, message } = await createAsiento(body)
      success ? toast.success(message) : toast.error(message)
    }  
    fetchData()
    handleCloseDialog()
  }

  const handleCloseDialog = () => {
    const dialog = document.getElementById('dialog-asiento') as HTMLDialogElement
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
          error={errors[name as keyof AsientoCreate]}
        />
      ))}
    </Form>
  )
}
