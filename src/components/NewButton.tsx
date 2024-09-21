import { ReactNode } from "react"

type NewButtonProps = {
  children: ReactNode
}

export function NewButton({ children }: NewButtonProps) {
  return (
    <button className="w-full p-2 bg-primary-500 rounded-lg hover:bg-primary-800 transition-colors">
      {children}
    </button>
  )
}
