interface InputRadioProps {
  value?: string;
  label: string;
  checked?: boolean;
}

export function InputRadio({ value, label, checked }: InputRadioProps) {
  return (
    <label className="flex items-center w-full gap-3">
      <input type="radio" name="sex" value={value} checked={checked ?? false} />
      <span>{label}</span>
    </label>
  )
}
