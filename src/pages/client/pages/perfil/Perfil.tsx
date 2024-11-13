import { useClientInfo } from '../../hooks/api/useClientInfo'
import { DataTable } from './components/DataTable'

export const Perfil = () => {
  const { clientInfo, loading, error } = useClientInfo()
  return (
    <section className="bg-inherit w-[80%] text-white flex flex-col gap-10">
      <div className="flex justify-between py-6">
        <h3 className="text-4xl font-bold text-nowrap">Mi información</h3>
      </div>
      { error && <div className="text-red-500 text-xl">{ error.message }</div> }
      { !error && clientInfo && <DataTable clientInfo={clientInfo} /> }
    </section>
  )
}