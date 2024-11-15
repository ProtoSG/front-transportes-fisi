import { Table } from '../../../admin/components'
import { createColumns } from '../../../admin/services/createColumns'
import { Header } from './../../components'
import { PrintButton } from './component/PrintButton'

export const Boleto = () => {
  const columns = createColumns([
    "hora_salida",
    "fecha_de_salida",
    "puerto_de_salida",
    "puerto_de_destino",
    "pasajero",
    "precio",
    "imprimir"
  ])

  const data = [
    {
      hora_salida: "12:00",
      fecha_de_salida: "2023-01-01",
      puerto_de_salida: "Barcelona",
      puerto_de_destino: "Madrid",
      pasajero: "Juan",
      precio: 10,
      imprimir: <PrintButton id_pasaje="1" />,
    },
    {
      hora_salida: "12:00",
      fecha_de_salida: "2023-01-01",
      puerto_de_salida: "Barcelona",
      puerto_de_destino: "Madrid",
      pasajero: "Juan",
      precio: 10,
      imprimir: <PrintButton id_pasaje="2" />,
    }
  ]

  return (
    <section className="bg-inherit w-[80%] text-white flex flex-col gap-10">
      <Header title='Mis boletos' />
      <Table columns={columns} data={data} />
    </section>
  )
}