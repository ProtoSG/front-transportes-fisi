import { DialogAddEdit } from "../../components";
import { FormBus ,MainBus } from "./components";
import { BusProvider } from "./hooks/useBus";
import { useEditBus } from "./hooks/useEditBus";

export function Bus() {
  const{isEdit} = useEditBus()

  return(
    <BusProvider>
      <MainBus />
      <DialogAddEdit 
      id="dialog-bus"
      title={isEdit ? "Editar Bus" : "Nuevo Bus"}>
        <FormBus />
      </DialogAddEdit>
    </BusProvider>
  )
}
