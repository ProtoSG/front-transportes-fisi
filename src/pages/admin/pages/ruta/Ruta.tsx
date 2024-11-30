import { DialogAddEdit} from "../../components";
import { FormRuta ,MainRuta } from "./components";
import { useEditRuta } from "./hooks/useEditRuta";
import { RutaProvider } from "./hooks/useRuta";

export function Ruta() {
  const {isEdit }=useEditRuta()
  return (
    <RutaProvider>
      <MainRuta />
      <DialogAddEdit 
      id="dialog-ruta"
      title={isEdit ? "Editar ruta" : "Nueva ruta"}>
        <FormRuta />
      </DialogAddEdit>
    </RutaProvider>
  )
}
