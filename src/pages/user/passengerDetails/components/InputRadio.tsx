import { Control, Controller, FieldError } from "react-hook-form";
import { ErrorInput } from "../../../../components/formSearch/components/ErrorInput";
import { FormPassengerData, PassengerData } from "../model/formPassenger.model";

interface InputRadioProps {
  value: string;
  label: string;
  name: `pasajeros.${number}.${keyof PassengerData}`;
  control: Control<FormPassengerData>;
  error?: FieldError;
}

export function InputRadio({ value, label, control, name, error }: InputRadioProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <label className="flex items-center w-full gap-3">
            <input
              {...field}
              value={value}
              type="radio"
              checked={field.value === value}
              onChange={(e) => field.onChange(e.target.value)}
            />
            <span>{label}</span>
          </label>
          <ErrorInput error={error} />
        </>
      )}
    />
  )
}
