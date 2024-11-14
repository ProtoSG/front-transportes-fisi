import { EditIcon } from "../../../../../icons"
import { DialogAddEdit } from "../../../../admin/components"
import { CreditCardProps } from "../../../hooks/api/useClientPaymentMethods"
import { FormMetodoPago } from "./FormMetodoPago"

export const EditButton = ({ data }: { data?: CreditCardProps }) => {
  const handleOpenDialog = () => {
    const dialog = document.getElementById('dialog-metodo-pago-update') as HTMLDialogElement
    if (dialog) dialog.showModal()
  }

  const onAction = () => {
    console.log('hola')
  }

  return (
    <>
      <button
        onClick={handleOpenDialog}
      >
        <EditIcon className="text-white cursor-pointer rounded-sm hover:scale-110 hover:bg-primary-500 transition-all duration-300 ease-in-out" />
      </button>
      <DialogAddEdit
        id="dialog-metodo-pago-update"
        title="Editar Método de Pago"
      >
        <FormMetodoPago onAction={onAction} data={data} />
      </DialogAddEdit>
    </>
  )
}