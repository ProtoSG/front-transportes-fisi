import { Control, FieldError, UseFormSetValue } from "react-hook-form"
import { PaymentData } from "../../../model/formPayment.model"
import { InputField } from "../../InputField"
import { CardIcon } from "../../../../../../icons"

interface CardNumberProps {
  control: Control<PaymentData>
  error?: FieldError
  setValue: UseFormSetValue<PaymentData>
}

export function CardNumber({ control, error, setValue }: CardNumberProps) {
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/\D/g, '')
      .replace(/([0-9]{4})/g, '$1-')
      .trim()
      .slice(0, 19)
  };

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(event.target.value);
    console.log(formattedValue)
    if (formattedValue.length <= 19) {
      setValue("numero_tarjeta", formattedValue);
    }
  };

  return (
    <InputField<PaymentData>
      name="numero_tarjeta"
      control={control}
      placeholder="N° de tarjeta"
      error={error}
      onChange={handleCardNumberChange}
      icon={<CardIcon className="text-zinc-400" />}
    />
  )
}
