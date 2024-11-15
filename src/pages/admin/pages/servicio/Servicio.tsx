import { DialogAddEdit } from "../../components";
import { FormServicio, MainServicio } from "./components";
import { ServicioProvider } from "./hooks/useServicio";

export function Servicio() {
  return (
    <ServicioProvider>
      <MainServicio />
      <DialogAddEdit
        id="dialog-servicio"
        title="Nuevo Servicio"
      >
        <FormServicio />
      </DialogAddEdit>
    </ServicioProvider>
  )
}
