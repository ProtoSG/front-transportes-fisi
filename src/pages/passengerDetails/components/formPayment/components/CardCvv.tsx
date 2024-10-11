import { Control, FieldError, UseFormSetValue } from "react-hook-form";
import { PaymentData } from "../../../model/formPayment.model";
import { InputField } from "../../InputField";
import { CreditCardIcon } from "../../../../../icons";

interface CardCvvProps {
  control: Control<PaymentData>
  error?: FieldError
  setValue: UseFormSetValue<PaymentData>
}

export function CardCvv({ control, error, setValue }: CardCvvProps) {

  const formatCardCvv = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/\D/g, '')
      .trim()
      .slice(0, 3)
  }

  const handleCardCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardCvv(event.target.value);
    setValue("cvv", formattedValue);
  };

  return (
    <InputField<PaymentData>
      name="cvv"
      control={control}
      placeholder="CVV"
      error={error}
      onChange={handleCardCvvChange}
      icon=<CreditCardIcon className="text-zinc-400" />
    />
  )
}
