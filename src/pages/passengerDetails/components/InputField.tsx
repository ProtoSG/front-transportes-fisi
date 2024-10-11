import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import { ErrorInput } from "../../../components/formSearch/components/ErrorInput";

interface InputFieldProps<T extends FieldValues> {
  type?: string;
  placeholder?: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
}

export function InputField<T extends FieldValues>({ icon, type, placeholder, name, control, error, readonly, onChange }: InputFieldProps<T>) {
  return (
    <div className={`flex gap-4 items-center  w-full px-2  border-[1px] border-primary-800 rounded-md ${readonly ? "bg-gray-200" : "bg-white"}`}>
      {icon}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className="relative w-full">
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`py-2 read-only:bg-gray-200 w-full bg-transparent focus:outline-none ${type === "date" ? "form-passenger-date" : ""}`}
              readOnly={readonly}
              value={field.value}
              onChange={onChange ?? field.onChange}
            />
            <ErrorInput error={error} />
          </div>
        )}
      />
    </div>
  )
}
