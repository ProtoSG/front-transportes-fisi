import { useForm } from "react-hook-form";
import { Form } from "../../../components";
import { descuentoData, schemaDescuento } from "../models/formDescuento.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { formField } from "../../../models/formField.model";
import { InputFieldLight } from "../../../../../components";
import { DescuentoCreate } from "../models/descuento.model";
import { useDescuento } from "../hooks/useDescuento";
import { createDescuento, updateDescuento } from "../services/descuento.service";
import { toast } from "sonner";
import { useEditDescuento } from "../hooks/useEditDescuento";
import { useEffect } from "react";
import { undefined } from "zod";

export function FormDescuento() {
  const { fetchData } = useDescuento()

  const { isEdit, data } = useEditDescuento()

  const { control, handleSubmit, formState: { errors }, reset } = useForm<descuentoData>({
    resolver: zodResolver(schemaDescuento),
    defaultValues: {
      codigo: "",
      monto: "",
      estado: "",
    }
  })

  useEffect(() => {
    if (data) {
      reset({
        codigo: data.codigo || "",
        monto: data.monto === 0 ? "" : String(data.monto),
        estado: data.estado || "",
      });
    }
  }, [data, reset]);

  const formFields: formField<descuentoData>[] = [
    { name: "codigo", type: "text", placeholder: "Codigo", label: "Codigo" },
    { name: "monto", type: "text", placeholder: "Monto", label: "Monto" },
    { name: "estado", type: "text", placeholder: "Estado", label: "Estado" },
  ]

  const onSubmit = async (descuento: descuentoData) => {
    const body: DescuentoCreate = {
      codigo: descuento.codigo,
      monto: Number(descuento.monto),
      estado: descuento.estado,
    }

    if (isEdit && data) {
      const { success, message } = await updateDescuento(body, data.id)
      success ? toast.success(message) : toast.error(message)
    } else {
      const { success, message } = await createDescuento(body)
      success ? toast.success(message) : toast.error(message)
    }


    fetchData()
    handleCloseDialog()
  }

  const handleCloseDialog = () => {
    const dialog = document.getElementById('dialog-descuento') as HTMLDialogElement
    if (dialog) dialog.close()
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
    >
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
