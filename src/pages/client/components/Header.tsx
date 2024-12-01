import { ReactNode } from 'react'

interface HeaderClientProps {
  title: string
  children?: ReactNode
  onClick?: () => void
}

export const Header = ({ title, children }: HeaderClientProps) => {
  return (
    <header className="flex justify-between py-6">
      <h3 className="font-bold text-nowrap text-4xl">{ title }</h3>
      { children }
    </header>
  )
}