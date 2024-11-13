import { NewButton } from "../../../components";

interface FormProps {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
}

export function Form({ children, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        {children}
      </div>
      <NewButton type="submit">Guardar</NewButton>
    </form>
  )
}
