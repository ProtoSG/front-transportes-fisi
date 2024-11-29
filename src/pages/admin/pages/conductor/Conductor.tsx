import { DialogAddEdit } from "../../components";
import { FormConductor, MainConductor } from "./components";
import { ConductorProvider } from "./hooks/useConductor";
import { useEditConductor } from "./hooks/useEditConductor";

export function Conductor() {
  const { isEdit } = useEditConductor()

  return (
    <ConductorProvider>
      <MainConductor />
      <DialogAddEdit
        id="dialog-conductor"
        title={isEdit ? "Editar Conductor" : "Nuevo Conductor"}
      >
        <FormConductor />
      </DialogAddEdit>
    </ConductorProvider>
  );
}
