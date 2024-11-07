import logo from '../../assets/logo.png'

export function Admin() {
  return (
    <main className="bg-primary-900 h-dvh">
      <div className='flex gap-7 justify-center items-center'>
        <img src={logo} alt="logo" className="w-9" />
        <h1 className='text-2xl font-bold'>Transportes FISI</h1>
        <img src={logo} alt="logo" className="w-9" />
      </div>
    </main>
  )
}
