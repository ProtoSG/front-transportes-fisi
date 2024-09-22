import { ReactNode } from "react"

type NewButtonProps = {
  children: ReactNode
  onClick: () => void
}

export function NewButton({ children, onClick }: NewButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-2 bg-primary-500 rounded-lg hover:bg-primary-800 transition-colors"
    >
      {children}
    </button>
  )
}
