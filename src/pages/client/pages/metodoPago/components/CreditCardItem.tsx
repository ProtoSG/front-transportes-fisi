import { CreditCardProps } from '../../../hooks/api/useClientPaymentMethods'
import { CreditCardIcon, EditIcon, TrashIcon } from '../../../../../icons'

export const CreditCardItem = ({ creditCard }: { creditCard: CreditCardProps }) => {
  return (
    <main className="flex gap-2 border-[1px] border-primary-400 rounded-md p-4">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-lg font-bold">{creditCard.nombre}</h2>
        <div className="flex gap-2 items-center">
          <CreditCardIcon className="text-white" />
          <h1 className="text-lg font-medium">{creditCard.numero_tarjeta}</h1>
        </div>
      </div>
      <div className="w-[40px] flex flex-col gap-2 text-primary-300 items-end">
        <EditIcon className="text-white cursor-pointer rounded-sm hover:scale-110 hover:bg-primary-500 transition-all duration-300 ease-in-out" />
        <TrashIcon className="text-red-400 cursor-pointer rounded-sm hover:scale-110 hover:bg-primary-500 transition-all duration-300 ease-in-out" />
      </div>
    </main>
  )
}