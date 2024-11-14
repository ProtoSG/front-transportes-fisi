import { create } from 'zustand'
import { CreditCardProps } from './api/useClientPaymentMethods'

interface StorePaymentMethodsProps {
  paymentMethods: CreditCardProps[],
  setInitialPaymentMethods: (paymentMethods: CreditCardProps[]) => void
  setPaymentMethods: (paymentMethods: CreditCardProps) => void
  removePaymentMethods: (id: string) => void
}

export const usePaymentMethodsStore = create<StorePaymentMethodsProps>((set) => ({
  paymentMethods: [],
  setInitialPaymentMethods: (paymentMethods: CreditCardProps[]) => set(() => ({
    paymentMethods
  })),
  setPaymentMethods: (paymentMethods: CreditCardProps) => set((state) => ({
    paymentMethods: [...state.paymentMethods, paymentMethods]
  })),
  removePaymentMethods: (id: string) => set((state) => ({
    paymentMethods: state.paymentMethods.filter((paymentMethod) => paymentMethod.id_metodo_pago !== id)
  }))
}))
