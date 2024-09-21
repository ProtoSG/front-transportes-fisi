import { ReactNode } from "react";
import clsx from "clsx";

type ContainerBgHeaderProps = {
  className?: string,
  children?: ReactNode
}

export function ContainerBgHeader({ className, children }: ContainerBgHeaderProps) {
  return (
    <section
      className={
        clsx(
          "bg-cover",
          className
        )
      }
      style={{ backgroundImage: `url('../bg.png')` }}
    >
      {children}
    </section>
  )
}
