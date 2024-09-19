import logo from '../assets/logo.png'

export function Header() {
  return (
    <header className='flex flex-col gap-4'>
      <div className='flex gap-7 justify-center items-center'>
        <img src={logo} alt="logo" className="w-9" />
        <h1 className='text-2xl font-bold'>Transportes FISI</h1>
      </div>
      <hr className='border-2 border-primary-300' />
    </header>
  )
}
