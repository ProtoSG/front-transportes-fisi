import { CreditCardItem } from "./CreditCardItem"
import { CreditCardProps } from "../../../hooks/api/useClientPaymentMethods"

export const CreditCardList = ({ creditCards }: { creditCards: CreditCardProps[] }) => {
  return (
    <main className="grid grid-cols-2 gap-4">
      {creditCards.map((cc) => (
        <CreditCardItem key={cc.id_metodo_pago} creditCard={cc} />
      ))}
    </main>
  )
}