import { DialogAddEdit } from "../../components";
import { FormServicio, MainServicio } from "./components";
import { useEditServicio } from "./hooks/useEditServicio";
import { ServicioProvider } from "./hooks/useServicio";

export function Servicio() {
  const { isEdit } = useEditServicio()

  return (
    <ServicioProvider>
      <MainServicio />
      <DialogAddEdit
        id="dialog-servicio"
        title={isEdit ? "Editar Servicio" : "Nuevo Servicio"}
      >
        <FormServicio />
      </DialogAddEdit>
    </ServicioProvider>
  )
}
