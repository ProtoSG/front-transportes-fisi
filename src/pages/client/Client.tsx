import { Outlet } from 'react-router-dom'
import { NavAside } from './components'

export function Client() {
  return (
    <main className="px-8 py-12 flex bg-primary-900 gap-28 h-dvh">
      <NavAside />
      <Outlet />
    </main>
  )
}