import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import { ErrorInput } from "../../../components/formSearch/components/ErrorInput";

interface InputFieldProps<T extends FieldValues> {
  type?: string;
  placeholder?: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  readonly?: boolean;
}

export function InputField<T extends FieldValues>({ type, placeholder, name, control, error, readonly }: InputFieldProps<T>) {
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
            className={`read-only:bg-gray-200 w-full p-2  border-[1px] border-primary-800 rounded-md bg-transparent focus:outline-none ${type === "date" ? "form-passenger-date" : ""}`}
            readOnly={readonly}
            value={field.value}
          />
          <ErrorInput error={error} />
        </div>
      )}
    />
  )
}
