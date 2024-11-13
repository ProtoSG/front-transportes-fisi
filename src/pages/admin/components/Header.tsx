import { NewButton } from "../../../components";

interface HeaderProps {
  title: string
  onClick?: () => void
}

export function Header({ title, onClick }: HeaderProps) {
  return (
    <header className="flex justify-between py-6">
      <h3 className="text-4xl font-bold text-nowrap">{title}</h3>
      <NewButton
        className="max-w-44"
        onClick={onClick}
      >
        Crear Nuevo
      </NewButton>
    </header>
  )
}
