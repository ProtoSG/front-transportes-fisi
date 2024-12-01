import { toast, Toaster } from 'sonner'
import { Header } from '../../components'
import { PrintButton } from './components/PrintButton'
import { ClientTransaccionProps, useClientTransaccions } from '../../hooks/api/useClientTransaccions'
import { createColumns } from '../../../admin/services/createColumns'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { Table } from '../../../admin/components'

interface ClientTransaccionPropsWithPrint extends ClientTransaccionProps {
  imprimir: JSX.Element
}

export const Compra = () => {
  const columns = createColumns([
    "hora_compra",
    "fecha_compra",
    "cantidad_pasajes",
    "precio_total",
    "imprimir"
  ])

  const [data, setData] = useState<ClientTransaccionPropsWithPrint[]>([])
  const { clientTransaccions, error } = useClientTransaccions()

  useEffect(() => {
    const t = clientTransaccions?.map((ct) => ({
      ...ct,
      fecha_compra: dayjs(ct.fecha_compra).format("DD/MM/YYYY"),
      hora_compra: dayjs(ct.fecha_compra).format("HH:mm"),
      imprimir: <PrintButton id_transaccion={ct.id_transaccion} />,
    })) as ClientTransaccionPropsWithPrint[]
    setData(t)
  }, [clientTransaccions])

  useEffect(() => {
    if (error) toast.error(error.message)
  }, [error])

  return (
    <>
      <section className="bg-inherit w-[80%] text-white flex flex-col gap-10">
        <Header title='Mis compras' />
        {
          clientTransaccions && <Table columns={columns} data={data} />
        }
      </section>
      <Toaster richColors />
    </>
  )
}
