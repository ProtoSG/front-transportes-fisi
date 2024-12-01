import { NewButton } from "../../../components";
interface HeaderProps {
  title: string
  onClick?: () => void
}

export function Header({ title, onClick }: HeaderProps) {
  return (
    <header className="flex justify-between py-6">
      <h2 className="text-4xl font-bold text-nowrap">{title}</h2>
      <NewButton
        className="max-w-44"
        onClick={onClick}
        >
        Crear Nuevo
      </NewButton>
    </header>
  )
}
