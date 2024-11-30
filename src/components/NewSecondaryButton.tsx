import clsx from "clsx"
import { ReactNode } from "react"

type NewButtonProps = {
  type?: "submit" | "reset" | "button"
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export function NewSecondaryButton({ type, children, onClick, className, disabled }: NewButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={
        clsx(
          "w-full p-2 border border-primary-500 rounded-lg focus:outline-none hover:bg-primary-500 transition-colors",
          className
        )
      }
    >
      {children}
    </button>
  )
}
