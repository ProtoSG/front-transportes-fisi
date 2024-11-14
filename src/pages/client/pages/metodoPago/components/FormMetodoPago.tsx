import { metodoPagoData, schemaMetodoPago } from '../models/formMetodoPago'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../../../../admin/components'
import { InputFieldLight } from '../../../../../components'
import { InputFieldWithFormat } from './InputFieldWithFormat'
import { CreditCardProps } from '../../../hooks/api/useClientPaymentMethods'
import { AddUpdatePaymentMethod } from '../../../services/clientPaymentMethods'

export const FormMetodoPago = ({ data, onAction }: { data?: CreditCardProps, onAction: (d: AddUpdatePaymentMethod) => void }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<metodoPagoData>({
    resolver: zodResolver(schemaMetodoPago),
    defaultValues: {
      nombre: data?.nombre ?? "",
      numero_tarjeta: data?.numero_tarjeta ?? "",
      cvv: "",
      month: "",
      day: ""
    }
  })

  const onSubmit = (data: metodoPagoData) => {
    const newData = { nombre: data.nombre, numero_tarjeta: data.numero_tarjeta.replace(/\s/g, '')}
    onAction(newData)
    // close dialog
    const dialog = document.getElementById('dialog-metodo-pago') as HTMLDialogElement
    if (dialog) dialog.close()
  }
  
  const formatCard = (card: string) => {
    return card.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, "$1 ").trim()
  }

  const formatCVV = (cvv: string) => {
    return cvv.replace(/\D/g, '').replace(/(\d{3})(?=\d)/g, "$1 ").trim()
  }

  const formDate = (date: string) => {
    return date.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, "$1 ").trim()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <InputFieldLight
        key="nombre"
        type="text"
        name="nombre"
        control={control}
        placeholder="Nombre"
        label="Nombre"
        error={errors.nombre}
      />
      <InputFieldWithFormat
        key="numero_tarjeta"
        type="text"
        name="numero_tarjeta"
        control={control}
        placeholder="xxxx xxxx xxxx xxxx"
        label="Numero de Tarjeta"
        error={errors.numero_tarjeta}
        functionFormater={formatCard}
        maxLength={16}
      />
      <InputFieldWithFormat
        key="cvv"
        type="text"
        name="cvv"
        control={control}
        placeholder="xxx"
        label="CVV"
        error={errors.cvv}
        functionFormater={formatCVV}
        maxLength={3}
      />
      <div className='w-full flex gap-4'>
        <InputFieldWithFormat
          key="month"
          type="text"
          name="month"
          control={control}
          placeholder="MM"
          label="Mes de Expiración"
          error={errors.month}
          functionFormater={formDate}
          maxLength={2}
        />
        <InputFieldWithFormat
          key="day"
          type="text"
          name="day"
          control={control}
          placeholder="DD"
          label="Día de Expiración"
          error={errors.day}
          functionFormater={formDate}
          maxLength={2}
        />
      </div>
    </Form>
  )
}
