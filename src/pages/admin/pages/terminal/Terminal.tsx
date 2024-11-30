import { DialogAddEdit } from "../../components";
import { FormTerminal ,MainTerminal } from "./components";
import { TerminalProvider } from "./hooks/useTerminal";
import { useEditTerminal } from "./hooks/useEditTerminal";

export function Terminal() {
  const { isEdit } = useEditTerminal();
  return(
    <TerminalProvider>
      <MainTerminal />
      <DialogAddEdit 
      id="dialog-terminal"
      title={isEdit ? "Editar Terminal" : "Nuevo terminal"}>
        <FormTerminal />
      </DialogAddEdit>
    </TerminalProvider>
  )
}

