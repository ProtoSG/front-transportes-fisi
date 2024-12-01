import { useEffect, useState } from 'react'
import { Table } from '../../../admin/components'
import { createColumns } from '../../../admin/services/createColumns'
import { useClientTickets } from '../../hooks/api/useClientTickets'
import { Header } from './../../components'
import { PrintButton } from './component/PrintButton'
import { toast, Toaster } from 'sonner'
import { ClientTicketsProps } from '../../hooks/api/useClientTickets'
import dayjs from 'dayjs'

interface ClientTicketsPropsWithPrint extends ClientTicketsProps {
  imprimir: JSX.Element
}

export const Boleto = () => {
  const columns = createColumns([
    "hora_salida",
    "fecha_salida",
    "puerto_salida",
    "puerto_destino",
    "nombre_pasajero",
    "precio",
    "fecha_compra",
    "imprimir"
  ])

  const [data, setData] = useState<ClientTicketsPropsWithPrint[]>([])
  const { clientTickets, error } = useClientTickets()

  useEffect(() => {
    const d = clientTickets?.map((a) => ({
      ...a,
      fecha_salida: dayjs(a.fecha_salida).format("DD/MM/YYYY"),
      fecha_compra: dayjs(a.fecha_compra).format("DD/MM/YYYY"),
      imprimir: <PrintButton id_pasaje={a.id_pasaje} />,
    })) as ClientTicketsPropsWithPrint[]
    setData(d)
  }, [clientTickets])

  useEffect(() => {
    if (error) toast.error(error.message)
  }, [error])

  return (
    <>
      <section className="bg-inherit w-[80%] text-white flex flex-col gap-10">
        <Header title='Mis boletos' />
        {
          clientTickets && <Table columns={columns} data={data} />
        }
      </section>
      <Toaster richColors />
    </>
  )
}
