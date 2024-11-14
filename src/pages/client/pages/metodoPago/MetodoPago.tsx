import { NewButton } from '../../../../components'
import { DialogAddEdit } from '../../../admin/components'
import { Header } from '../../components'
import { useGetClientPaymentMethods } from '../../hooks/api/useClientPaymentMethods'
import { CreditCardList } from './components/CreditCardList'
import { FormMetodoPago } from './components/FormMetodoPago'

export const MetodoPago = () => {
  const handleOpenDialog = () => {
    const dialog = document.getElementById('dialog-metodo-pago') as HTMLDialogElement
    if (dialog) dialog.showModal()
  }

  const { creditCards, error } = useGetClientPaymentMethods()

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
        { error && <div className="text-red-500 text-xl">{ error.message }</div> }
        { !error && creditCards && <CreditCardList creditCards={creditCards} /> }
      </section>
      <DialogAddEdit
        id="dialog-metodo-pago"
        title="Nuevo Método de Pago"
      >
        <FormMetodoPago />
      </DialogAddEdit>
    </>
  )
}