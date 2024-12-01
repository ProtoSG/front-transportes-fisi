import { useForm } from "react-hook-form";
import { Form } from "../../../components";
import { conductorData, schemaConductor } from "../models/formConductor.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputFieldLight } from "../../../../../components";
import { formField } from "../../../models/formField.model";
import { useConductor } from "../hooks/useConductor";
import { useEditConductor } from "../hooks/useEditConductor";
import { useEffect } from "react";
import { ConductorCreate, ConductorUpdate } from "../models/conductor.model";
import { toast } from "sonner";
import { createConductor, updateConductor } from "../services/conductor.service";

export function FormConductor() {
  const { fetchData } = useConductor()
  const { isEdit, data } = useEditConductor()

  const { control, handleSubmit, formState: { errors }, reset } = useForm<conductorData>({
    resolver: zodResolver(schemaConductor),
    defaultValues: {
      nombre: "",
      apellido_pat: "",
      apellido_mat: "",
      dni: "",
      sexo: "",
    },
  });

  useEffect(() => {
    if (data) {
      reset({
        nombre: data.nombre || "",
        apellido_pat: data.apellidoPaterno || "",
        apellido_mat: data.apellidoMaterno || "",
        dni: data.dni || "",
        sexo: data.sexo || "",
      })
    }
  }, [data, reset])

  const formFields: formField<conductorData>[] = [
    { name: "nombre", type: "text", placeholder: "Nombre", label: "Nombre" },
    { name: "apellido_pat", type: "text", placeholder: "Apellido Pat", label: "Apellido Pat" },
    { name: "apellido_mat", type: "text", placeholder: "Apellido Mat", label: "Apellido Mat" },
    { name: "dni", type: "text", placeholder: "Dni", label: "Dni" },
    { name: "sexo", type: "text", placeholder: "Sexo", label: "Sexo" },
  ];

  const onSubmit = async (conductor: conductorData) => {
    const bodyCreate: ConductorCreate = {
      nombre: conductor.nombre,
      apellido_pat: conductor.apellido_pat,
      apellido_mat: conductor.apellido_mat,
      dni: conductor.dni,
      sexo: conductor.sexo,
    }

    const bodyUpdate: ConductorUpdate = {
      ...bodyCreate,
      id_chofer: data?.id || 0
    }

    if (isEdit && data) {
      const { success, message } = await updateConductor(bodyUpdate)
      success ? toast.success(message) : toast.error(message)
    } else {
      const { success, message } = await createConductor(bodyCreate)
      success ? toast.success(message) : toast.error(message)
    }

    fetchData()
    handleCloseDialog()
  };

  const handleCloseDialog = () => {
    const dialog = document.getElementById('dialog-conductor') as HTMLDialogElement
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
          error={errors[name as keyof conductorData]}
        />
      ))}
    </Form>
  );
}
