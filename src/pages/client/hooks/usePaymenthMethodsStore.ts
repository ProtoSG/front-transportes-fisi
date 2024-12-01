import { create } from 'zustand'
import { CreditCardProps } from './api/useClientPaymentMethods'

interface StorePaymentMethodsProps {
  paymentMethods: CreditCardProps[],
  setInitialPaymentMethods: (paymentMethods: CreditCardProps[]) => void
  addPaymentMethods: (paymentMethods: CreditCardProps) => void
  removePaymentMethods: (id: string) => void
  updatePaymentMethod: (paymentMethod: CreditCardProps) => void
}

export const usePaymentMethodsStore = create<StorePaymentMethodsProps>((set) => ({
  paymentMethods: [],
  setInitialPaymentMethods: (paymentMethods: CreditCardProps[]) => set(() => ({
    paymentMethods
  })),
  addPaymentMethods: (paymentMethods: CreditCardProps) => set((state) => ({
    paymentMethods: [...state.paymentMethods, paymentMethods]
  })),
  removePaymentMethods: (id: string) => set((state) => ({
    paymentMethods: state.paymentMethods.filter((paymentMethod) => paymentMethod.id_metodo_pago !== id)
  })),
  updatePaymentMethod: (updatedPaymentMethod: CreditCardProps) => set((state) => ({
    paymentMethods: state.paymentMethods.map((pm) => pm.id_metodo_pago === updatedPaymentMethod.id_metodo_pago ? updatedPaymentMethod : pm)
  }))
}))
