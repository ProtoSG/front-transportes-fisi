import { ClientInfoProps } from '../../../hooks/api/useClientInfo'
import dayjs from 'dayjs'

export const DataTable = ({ clientInfo }: { clientInfo: ClientInfoProps }) => {
  return (
    <div className="flex text-xl">
      <div className="flex flex-col gap-2 font-semibold w-[350px]">
        <h1>Nombre</h1>
        <h1>Apellido Paterno</h1>
        <h1>Apellido Materno</h1>
        <h1>DNI</h1>
        <h1>Fecha de Nacimiento</h1>
        <h1>Sexo</h1>
        <h1>Teléfono</h1>
        <h1>Usuario</h1>
      </div>
      <div className="flex flex-col gap-2 text-primary-300">
        <h1>{clientInfo.nombre}</h1>
        <h1>{clientInfo.apellido_pat}</h1>
        <h1>{clientInfo.apellido_mat}</h1>
        <h1>{clientInfo.dni}</h1>
        <h1>{dayjs(clientInfo.fecha_nacimiento).format('DD/MM/YYYY')}</h1>
        <h1>{clientInfo.sexo}</h1>
        <h1>{clientInfo.telefono}</h1>
        <h1>{clientInfo.username}</h1>
      </div>
    </div>
  )
}