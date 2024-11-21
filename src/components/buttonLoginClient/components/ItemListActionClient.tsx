import { ReactNode } from "react"

interface ItemProps {
  icon: ReactNode
  text: string
  onClick: () => void
}

export function ItemListActionClient({ icon, text, onClick }: ItemProps) {
  return (
    <li
      onClick={onClick}
      className='flex gap-2 items-center hover:bg-primary-200 px-2 py-3 rounded hover:cursor-pointer transition-colors'
    >
      {icon}
      <span>{text}</span>
    </li>
  )
}

