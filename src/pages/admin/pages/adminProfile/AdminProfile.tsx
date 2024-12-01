import dayjs from "dayjs";
import { UserOutlineIcon } from "../../../../icons";
import { useAdminInfo } from "./hooks/useAdminInfo";

export function AdminProfile() {
  const { data, loading, error } = useAdminInfo()

  return (
    <section className="flex w-[80%] gap-8 flex-col items-center text-white">
      <div className="border-8 rounded-full p-4">
        <UserOutlineIcon className="size-32" />
      </div>
      {
        loading ? (<span>loading...</span>)
          : error ? (<span>Error</span>)
            : data && (
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
                  <h1>{data.nombre}</h1>
                  <h1>{data.apellidoPat}</h1>
                  <h1>{data.apellidoMat}</h1>
                  <h1>{data.dni}</h1>
                  <h1>{dayjs(data.fechaNacimiento).format('DD/MM/YYYY')}</h1>
                  <h1>{data.sexo}</h1>
                  <h1>{data.phone}</h1>
                  <h1>{data.username}</h1>
                </div>
              </div>
            )
      }
    </section>
  )
}
