import { ReactNode } from "react"

type NewButtonProps = {
  type?: "submit" | "reset" | "button"
  children: ReactNode
  onClick?: () => void
}

export function NewButton({ type, children, onClick }: NewButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full p-2 bg-primary-500 rounded-lg focus:outline-none hover:bg-primary-800 transition-colors"
    >
      {children}
    </button>
  )
}
