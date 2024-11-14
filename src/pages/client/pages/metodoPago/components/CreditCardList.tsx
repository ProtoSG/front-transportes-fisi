import { CreditCardItem } from "./CreditCardItem"

export interface CreditCardProps {
  id_metodo_pago: number,
  nombre: string,
  numero_tarjeta: string,
}

export const CreditCardList = ({ creditCards }: { creditCards: CreditCardProps[] }) => {
  return (
    <main className="grid grid-cols-2 gap-4">
      {creditCards.map((cc) => (
        <CreditCardItem key={cc.id_metodo_pago} creditCard={cc} />
      ))}
    </main>
  )
}