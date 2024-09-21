import clsx from "clsx"
import { ReactNode } from "react"

type ContainerProps = {
  className?: string,
  children?: ReactNode
}

export function Container({ children, className }: ContainerProps) {
  return (
    <section
      className={
        clsx("max-w-[1200px] mx-auto px-[40px] flex flex-col ", className)
      }
    >
      {children}
    </section>
  )
}
