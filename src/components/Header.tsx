import logo from '../assets/logo.png'
import { UserIcon } from '../icons'

export function Header() {
  return (
    <header className='flex flex-col gap-4 relative'>
      <div className='flex gap-7 justify-center items-center'>
        <img src={logo} alt="logo" className="w-9" />
        <h1 className='text-2xl font-bold'>Transportes FISI</h1>
      </div>
      <a href='/admin' className='absolute border-2 rounded-full p-2 right-0 hover:cursor-pointer hover:bg-white/20 transition-colors '>
        <UserIcon />
      </a>
      <hr className='border-2 border-primary-300' />
    </header>
  )
}
