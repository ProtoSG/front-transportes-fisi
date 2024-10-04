import { Control, Controller, FieldError } from "react-hook-form";
import { ErrorInput } from "../../../components/formSearch/components/ErrorInput";
import { FormPassengerData, PassengerData } from "../model/formPassenger.model";

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  name: `pasajeros.${number}.${keyof PassengerData}` | "email" | "phone";
  control: Control<FormPassengerData>;
  error?: FieldError
}

export function InputField({ type, placeholder, name, control, error }: InputFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="relative w-full">
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={`w-full p-2  border-[1px] border-primary-800 rounded-md bg-transparent ${type === "date" ? "form-passenger-date" : ""}`}
            value={field.value || ""}
          />
          <ErrorInput error={error} />
        </div>
      )}
    />
  )
}
