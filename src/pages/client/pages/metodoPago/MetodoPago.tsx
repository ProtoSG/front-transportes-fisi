import { useEffect } from 'react'
import { NewButton } from '../../../../components'
import { DialogAddEdit } from '../../../admin/components'
import { Header } from '../../components'
import { useAddPaymentMethod, useGetClientPaymentMethods } from '../../hooks/api/useClientPaymentMethods'
import { usePaymentMethodsStore } from '../../hooks/usePaymenthMethodsStore'
import { CreditCardList } from './components/CreditCardList'
import { FormMetodoPago } from './components/FormMetodoPago'
import { toast, Toaster } from 'sonner'

export const MetodoPago = () => {
  const handleOpenDialog = () => {
    const dialog = document.getElementById('dialog-metodo-pago') as HTMLDialogElement
    if (dialog) dialog.showModal()
  }
  const { addPaymentMethod, newData, error: addError } = useAddPaymentMethod()
  const { creditCards, error } = useGetClientPaymentMethods()
  const setInitialPaymentMethods = usePaymentMethodsStore((state) => state.setInitialPaymentMethods)

  useEffect(() => {
    if (creditCards) setInitialPaymentMethods(creditCards)
  }, [creditCards, setInitialPaymentMethods])

  const paymentMethods = usePaymentMethodsStore((state) => state.paymentMethods)
  const addPaymentMethods = usePaymentMethodsStore((state) => state.addPaymentMethods)

  useEffect(() => {
    if (newData) {
      addPaymentMethods(newData)
      toast.success(`Método de Pago agregado con éxito`)
    }
  }, [newData, addPaymentMethods])

  useEffect(() => {
    if (addError) toast.error(addError.message)
    if (error) toast.error(error.message)
  }, [error, addError])

  return (
    <>
      <section className="bg-inherit w-[80%] text-white flex flex-col gap-10">
        <Header title='Mis métodos de pago'>
          <NewButton
            className="max-w-44"
            onClick={handleOpenDialog}
          >
            Agregar Nuevo
          </NewButton>
        </Header>
        { !error && paymentMethods && <CreditCardList creditCards={paymentMethods} /> }
      </section>
      <DialogAddEdit
        id="dialog-metodo-pago"
        title="Nuevo Método de Pago"
      >
        <FormMetodoPago dialogId="dialog-metodo-pago" onAction={addPaymentMethod} />
      </DialogAddEdit>
      <Toaster richColors />
    </>
  )
}
