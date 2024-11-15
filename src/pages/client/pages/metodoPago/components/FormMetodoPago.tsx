import { metodoPagoData, schemaMetodoPago } from '../models/formMetodoPago'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../../../../admin/components'
import { InputFieldLight } from '../../../../../components'
import { InputFieldWithFormat } from './InputFieldWithFormat'
import { CreditCardProps } from '../../../hooks/api/useClientPaymentMethods'
import { UpdatePaymentMethodProps } from '../../../services/clientPaymentMethods'
import { useEffect } from 'react'

interface FormMetodoPagoProps {
  data?: CreditCardProps,
  id?: string,
  onAction: (d: UpdatePaymentMethodProps) => void
  dialogId: string
}

export const FormMetodoPago = ({ dialogId, data, onAction, id }: FormMetodoPagoProps) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<metodoPagoData>({
    resolver: zodResolver(schemaMetodoPago),
    defaultValues: {
      nombre: data?.nombre ?? "",
      numero_tarjeta: data?.numero_tarjeta ?? "",
      cvv: "",
      month: "",
      day: ""
    }
  })

  useEffect(() => {
    if (data) {
      reset({
        nombre: data?.nombre ?? "",
        numero_tarjeta: data?.numero_tarjeta ?? "",
        cvv: "",
        month: "",
        day: ""
      })
    }
  }, [data, reset])

  const onSubmit = (dataForm: metodoPagoData) => {
    const { nombre, numero_tarjeta } = dataForm
    const newData = {
      nombre,
      numero_tarjeta: numero_tarjeta.replace(/\s/g, ''),
      id_metodo_pago: id ?? "" 
    }
    // console.log(newData)
    onAction(newData)
    // close dialog
    const dialog = document.getElementById(dialogId) as HTMLDialogElement
    if (dialog) dialog.close()
  }
  
  const formatCard = (card: string) => card.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, "$1 ").trim()
  const formatCVV = (cvv: string) => cvv.replace(/\D/g, '').replace(/(\d{3})(?=\d)/g, "$1 ").trim()
  const formDate = (date: string) => date.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, "$1 ").trim()

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
