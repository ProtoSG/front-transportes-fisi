import clsx from "clsx"
import { ReactNode } from "react"

type NewButtonProps = {
  type?: "submit" | "reset" | "button"
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export function NewButton({ type, children, onClick, className, disabled }: NewButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={
        clsx(
          "w-full p-2 bg-primary-500 rounded-lg focus:outline-none hover:bg-primary-800 transition-colors",
          className
        )
      }
    >
      {children}
    </button>
  )
}
