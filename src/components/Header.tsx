import logo from '../assets/logo.png'
import { ButtonLoginClient } from './buttonLoginClient/ButtonLoginClient'

export function Header() {
  return (
    <header className='flex flex-col gap-4 relative'>
      <a href='/' className='flex gap-7 justify-center items-center'>
        <img src={logo} alt="logo" className="w-9" />
        <h1 className='text-2xl font-bold'>TourXpress</h1>
      </a>
      <ButtonLoginClient />
      <hr className='border-2 border-primary-300' />
    </header>
  )
}
