import { useClientInfo } from '../../hooks/api/useClientInfo'
import { DataTable } from './components/DataTable'
import { Header } from './../../components'

export const Perfil = () => {
  const { clientInfo, loading, error } = useClientInfo()
  return (
    <section className="bg-inherit w-[80%] text-white flex flex-col gap-10">
      <Header title='Mi información' />
      { error && <div className="text-red-500 text-xl">{ error.message }</div> }
      { !error && clientInfo && <DataTable clientInfo={clientInfo} /> }
    </section>
  )
}