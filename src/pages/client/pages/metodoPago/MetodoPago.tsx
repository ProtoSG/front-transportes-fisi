import { NewButton } from '../../../../components'
import { DialogAddEdit } from '../../../admin/components'
import { Header } from '../../components'
import { CreditCardList } from './components/CreditCardList'
import { FormMetodoPago } from './components/FormMetodoPago'

export const MetodoPago = () => {
  const handleOpenDialog = () => {
    const dialog = document.getElementById('dialog-metodo-pago') as HTMLDialogElement
    if (dialog) dialog.showModal()
  }

  const creditCards = [
    {
      id_metodo_pago: 1,
      nombre: "Nombre",
      numero_tarjeta: "Numero de Tarjeta"
    },
    {
      id_metodo_pago: 2,
      nombre: "Nombre",
      numero_tarjeta: "Numero de Tarjeta"
    },
    {
      id_metodo_pago: 3,
      nombre: "Nombre",
      numero_tarjeta: "Numero de Tarjeta"
    }
  ]

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
        <CreditCardList creditCards={creditCards} />
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