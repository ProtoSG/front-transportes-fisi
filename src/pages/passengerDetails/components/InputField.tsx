interface InputFieldProps {
  type?: string;
  placeholder?: string;
  name: string;
}

export function InputField({ type, placeholder, name }: InputFieldProps) {
  return (
    <input
      type={type ?? "text"}
      name={name}
      placeholder={placeholder}
      className={`w-full p-2  border-[1px] border-primary-800 rounded-md bg-transparent ${type === "date" ? "form-passenger-date" : ""}`}
    />
  )
}
