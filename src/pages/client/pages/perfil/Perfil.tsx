import { useClientInfo } from '../../hooks/api/useClientInfo'
import { DataTable } from './components/DataTable'
import { Header } from './../../components'
import { Toaster, toast } from 'sonner'
import { useEffect } from 'react'

export const Perfil = () => {
  const { clientInfo, error } = useClientInfo()

  useEffect(() => {
    if (error) toast.error(error.message)
  }, [error])

  return (
    <>
      <section className="bg-inherit w-[80%] text-white flex flex-col gap-10">
        <Header title='Mi información' />
        { !error && clientInfo && <DataTable clientInfo={clientInfo} /> }
      </section>
      <Toaster richColors />
    </>
  )
}