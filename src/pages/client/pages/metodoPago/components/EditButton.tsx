import { useEffect } from "react"
import { EditIcon } from "../../../../../icons"
import { DialogAddEdit } from "../../../../admin/components"
import { CreditCardProps, useUpdatePaymentMethod } from "../../../hooks/api/useClientPaymentMethods"
import { usePaymentMethodsStore } from "../../../hooks/usePaymenthMethodsStore"
import { FormMetodoPago } from "./FormMetodoPago"

export const EditButton = ({ data }: { data?: CreditCardProps }) => {
  const dialogId = `dialog-metodo-pago-update-${data?.id_metodo_pago}`
  const handleOpenDialog = () => {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement
    if (dialog) dialog.showModal()
  }

  const { updatePaymentMethod, newData, error: updateError } = useUpdatePaymentMethod()

  const updatePaymentMethods = usePaymentMethodsStore((state) => state.updatePaymentMethod)

  useEffect(() => {
    if (newData) updatePaymentMethods(newData)
  }, [newData, updatePaymentMethods])

  return (
    <>
      <button
        onClick={handleOpenDialog}
      >
        <EditIcon className="text-white cursor-pointer rounded-sm hover:scale-110 hover:bg-primary-500 transition-all duration-300 ease-in-out" />
      </button>
      <DialogAddEdit
        id={dialogId}
        title="Editar Método de Pago"
      >
        <FormMetodoPago
          key={data?.id_metodo_pago}
          id={data?.id_metodo_pago}
          dialogId={dialogId}
          onAction={updatePaymentMethod}
          data={data}
        />
      </DialogAddEdit>
    </>
  )
}