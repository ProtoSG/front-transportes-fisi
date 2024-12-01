import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../../components";
import { useEditRuta } from "../hooks/useEditRuta";
import { rutaData, schemaRuta } from "../models/formRuta.model";
import { createRuta, updateRuta } from "../services/ruta.service";
import { useRuta } from "../hooks/useRuta";
import { zodResolver } from "@hookform/resolvers/zod";
import { formField } from "../../../models/formField.model";
import { InputFieldLight } from "../../../../../components";
import { RutaCreate } from "../models/ruta.model";
import { toast } from "sonner";

export function FormRuta() {
  const { fetchData } = useRuta()
  const{isEdit ,data}=useEditRuta()

  const { control, handleSubmit, formState: { errors } ,reset} = useForm<rutaData>({
    resolver: zodResolver(schemaRuta),
    defaultValues: {
      duracion_estimada: "",
      distancia: "",
      estado: "",
      id_origen: "",
      id_destino: ""
    }
  })

  useEffect(() => {
    if (data) {
      reset({
      duracion_estimada: data.duracion_estimada || "",
      distancia: data.distancia?.toString() || "",
      estado: data.estado || "",
      id_origen: data.id_origen?.toString() || "",
      id_destino: data.id_destino?.toString() || "",
    })
    }
  }, [data, reset])
  const formFields: formField<rutaData>[] = [
    { name: "duracion_estimada", type: "text", placeholder: "Duración estimada", label: "Duración estimada" },
    { name: "distancia", type: "text", placeholder: "Distancia", label: "Distancia" },
    { name: "estado", type: "text", placeholder: "Estado", label: "Estado" },
    { name: "id_origen", type: "text", placeholder: "Origen", label: "Origen" },
    { name: "id_destino", type: "text", placeholder: "Destino", label: "Destino" }
  ]
  const onSubmit = async(ruta: rutaData) => {
    const body : RutaCreate = {
      duracion_estimada: ruta.duracion_estimada,
      distancia: Number(ruta.distancia),
      estado: ruta.estado,
      id_origen: Number(ruta.id_origen),
      id_destino: Number(ruta.id_destino)
    }
    if (isEdit && data) {
      const { success, message } = await updateRuta(body,data.id)
      success ? toast.success(message) : toast.error(message)
    } else {
    const { success, message } = await createRuta(body)
    success ? toast.success(message) : toast.error(message)}
    fetchData()
    handleCloseDialog()
  }
  const handleCloseDialog = () => {
    const dialog = document.getElementById('dialog-ruta') as HTMLDialogElement
    if (dialog) dialog.close()
  }


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
          error={errors[name as keyof RutaCreate]}
        />
      ))}
    </Form>
  )
}
