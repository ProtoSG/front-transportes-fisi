import logo from '../../../assets/logo.png'

export function TitleLogin() {
  return (
    <div className='absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2  flex gap-7 justify-center items-center'>
      <img src={logo} alt="logo" className="w-14" />
      <h1 className='text-6xl text-primary-200 font-bold text-nowrap'>Transportes FISI</h1>
      <img src={logo} alt="logo" className="w-14" />
    </div>
  )
}