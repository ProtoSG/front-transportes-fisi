import { CreditCardProps } from '../../../hooks/api/useClientPaymentMethods'
import { DeleteButton } from './DeleteButton'
import { EditButton } from './EditButton'
import { VisaIcon } from '../../../../../icons'

const formatCarNumber = (number: string) => {
  // space every 4 characters
  return number.match(/.{1,4}/g)?.join(' ')
}

export const CreditCardItem = ({ creditCard }: { creditCard: CreditCardProps }) => {
  return (
    <main className="flex gap-2 border-[1px] border-primary-400 rounded-md p-4">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-lg font-bold">{creditCard.nombre}</h2>
        <div className="flex gap-2 items-center">
          <VisaIcon className="text-white" />
          <h1 className="text-lg font-medium">{formatCarNumber(creditCard.numero_tarjeta)}</h1>
        </div>
      </div>
      <div className="w-[40px] flex flex-col gap-2 text-primary-300 items-end justify-end">
        <EditButton data={creditCard}/>
        <DeleteButton id={creditCard.id_metodo_pago} />
      </div>
    </main>
  )
}