import { useForm } from "react-hook-form"
import { Form } from "../../../components"
import { schemaTerminal, terminalData } from "../models/formTerminal.model"
import { createTerminal ,updateTerminal } from "../services/terminal.service";
import { zodResolver } from "@hookform/resolvers/zod"
import { formField } from "../../../models/formField.model"
import { InputFieldLight } from "../../../../../components"
import { useTerminal } from "../hooks/useTerminal"
import { useEditTerminal } from "../hooks/useEditTerminal"
import { useEffect } from "react"
import { TerminalCreate } from "../models/terminal.model"
import { toast } from "sonner"

export function FormTerminal() {
  const {fetchData} =useTerminal()
  const { isEdit ,data}= useEditTerminal()
  const { control, handleSubmit, formState: { errors } ,reset } = useForm<terminalData>({
    resolver: zodResolver(schemaTerminal),
    defaultValues: {
      nombre: "",
      departamento: "",
      provincia: ""
    }
  })

  useEffect(() => {
    if (data) {
      reset({ nombre: data.nombre || "",
      departamento: data.departamento || "",
      provincia: data.provincia || ""
      })
  }}, [data, reset])
  
  const formFields: formField<terminalData>[] = [
    { name: "nombre", type: "text", placeholder: "Nombre", label: "Nombre" },
    { name: "departamento", type: "text", placeholder: "Departamento", label: "Departamento" },
    { name: "provincia", type: "text", placeholder: "Provincia", label: "Provincia" }
  ]

  const onSubmit =async (bus: terminalData) => {
    const body : TerminalCreate = {
      nombre: bus.nombre,
      departamento: bus.departamento,
      provincia: bus.provincia,
    }
    if (isEdit && data) {
      const { success, message } = await updateTerminal(body,data.id)
      success ? toast.success(message) : toast.error(message)
    } else {
    const { success, message } = await createTerminal(body)
    success ? toast.success(message) : toast.error(message)}
    fetchData()
    handleCloseDialog()
  }

  const handleCloseDialog = () => { 
    const dialog = document.getElementById("dialog-terminal") as HTMLDialogElement
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
          error={errors[name as keyof TerminalCreate]}
        />
      ))}
    </Form>
  )
}
