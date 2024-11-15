import { DialogAddEdit } from "../../components";
import { FormDescuento, MainDescuento } from "./components";
import { DescuentoProvider } from "./hooks/useDescuento";
import { useEditDescuento } from "./hooks/useEditDescuento";

export function Descuento() {
  const { isEdit } = useEditDescuento()

  return (
    <DescuentoProvider>
      <MainDescuento />
      <DialogAddEdit
        id="dialog-descuento"
        title={isEdit ? "Editar Descuento" : "Nuevo Descuento"}
      >
        <FormDescuento />
      </DialogAddEdit>
    </DescuentoProvider>
  )
}
