import { DialogAddEdit } from "../../components";
import { FormAsiento ,MainAsiento} from "./components";
import { AsientoProvider } from "./hooks/useAsiento";
import { useEditAsiento } from "./hooks/useEditAsiento";

export function Asiento() {
  const {isEdit} = useEditAsiento()

  return (
    <AsientoProvider>
      <MainAsiento/>
      <DialogAddEdit 
        id="dialog-asiento"
        title={isEdit ? "Editar Asiento" : "Nuevo Asiento"}>
        <FormAsiento/>
      </DialogAddEdit>
    </AsientoProvider>
  )
}
