import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import { ErrorInput } from "../../../../../components/formSearch/components/ErrorInput";

interface InputFieldProps<T extends FieldValues> {
  type?: string;
  placeholder?: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  label?: string
  functionFormater: (text: string) => string
  maxLength: number
}

export function InputFieldWithFormat<T extends FieldValues>({ icon, type, placeholder, name, control, error, readonly, label, functionFormater, maxLength }: InputFieldProps<T>) {
  return (
    <label className="flex flex-col gap-3">
      <span className="text-xl font-medium">
        {label}
      </span>
      <div className={`flex gap-4 items-center w-full px-2 relative border-2 border-primary-50 rounded-md`}>
        {icon}
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <div className="w-full">
              <input
                {...field}
                type={type}
                placeholder={placeholder}
                className={`py-2 text-white w-full bg-inherit focus:outline-none ${type === "date" ? "form-passenger-date" : ""}`}
                readOnly={readonly}
                value={field.value}
                onChange={(e) => {
                  const rawValue = e.target.value.replace(/\s/g, '')
                  if (rawValue.length > maxLength) return
                  const formattedValue = functionFormater(e.target.value)
                  field.onChange(formattedValue)
                }}
              />
              <ErrorInput error={error} />
            </div>
          )}
        />
      </div>
    </label>
  )
}