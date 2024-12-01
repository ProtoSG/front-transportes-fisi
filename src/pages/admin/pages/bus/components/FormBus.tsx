import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../../components";
import { useEditBus } from "../hooks/useEditBus";
import { busData, schemaBus } from "../models/formBus.model";
import { createBus ,updateBus } from "../services/bus.service";
import { useBus } from "../hooks/useBus";
import { zodResolver } from "@hookform/resolvers/zod";
import { formField } from "../../../models/formField.model";
import { InputFieldLight } from "../../../../../components";
import { BusCreate } from "../models/bus.model";
import { toast } from "sonner";
export function FormBus() {
  const { fetchData} = useBus()
  const{isEdit ,data}=useEditBus()

  const { control, handleSubmit, formState: { errors },reset } = useForm<busData>({
    resolver: zodResolver(schemaBus),
    defaultValues: {
      asientos: "",
      placa: "",
      marca: "",
      niveles: "",
      id_tipo_servicio_bus: ""
    }
  })

  useEffect(() => {
    if (data) {
      reset({ 
      asientos: data.asientos?.toString() || "",
      placa: data.placa || "",
      marca: data.marca || "",
      niveles: data.niveles?.toString() || "",
      id_tipo_servicio_bus: data.id_tipo_servicio_bus?.toString() || "" })
    }
  }, [data, reset])

  const formFields: formField<busData>[] = [
    { name: "asientos", type: "text", placeholder: "Asientos", label: "Asientos" },
    { name: "placa", type: "text", placeholder: "Placa", label: "Placa" },
    { name: "marca", type: "text", placeholder: "Marca", label: "Marca" },
    { name: "niveles", type: "text", placeholder: "Niveles", label: "Niveles" },
    { name: "id_tipo_servicio_bus", type: "text", placeholder: "Tipo Servicio Bus", label: "Tipo Servicio Bus" }
  ]
  const onSubmit =async (bus: busData) => {
    const body : BusCreate = {
      asientos: Number(bus.asientos),
      placa: bus.placa,
      marca: bus.marca,
      niveles: Number(bus.niveles),
      id_tipo_servicio_bus: Number(bus.id_tipo_servicio_bus)
    }
    if (isEdit && data) {
      const { success, message } = await updateBus(body,data.id)
      success ? toast.success(message) : toast.error(message)
    } else {
    const { success, message } = await createBus(body)
    success ? toast.success(message) : toast.error(message)}
    fetchData()
    handleCloseDialog()
  }
  
  const handleCloseDialog = () => {
    const dialog = document.getElementById('dialog-bus') as HTMLDialogElement
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
          error={errors[name as keyof BusCreate]}
        />
      ))}
    </Form>
  )
}
