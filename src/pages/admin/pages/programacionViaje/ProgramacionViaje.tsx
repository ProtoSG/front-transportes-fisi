import { DialogHTMLAttributes } from "react";
import { NewButton } from "../../../../components";
import { DialogAddEdit, Table } from "../../components";
import { FormProgramacionViaje } from "./components";

const createColumns = (keys: string[]) =>
  keys.map((key) => ({
    name: key,
    selector: key,
    // sortable: true,
    center: true,
    // compact: true,
    cell: (row: any) => row[key],
  }))

export function ProgramacionViaje() {

  const columns = createColumns([
    "id",
    "fecha_salida",
    "hora_salida",
    "precio_nivel_uno",
    "precio_nivel_dos",
    "asientos_ocupados",
    "acciones"
  ])

  const data = [
    {
      id: "1",
      fecha_salida: "2023-01-01",
      hora_salida: "12:00",
      precio_nivel_uno: 10,
      precio_nivel_dos: 20,
      asientos_ocupados: 2,
      acciones: "Ver",
    },
    {
      id: "2",
      fecha_salida: "2023-01-01",
      hora_salida: "12:00",
      precio_nivel_uno: 10,
      precio_nivel_dos: 20,
      asientos_ocupados: 2,
      acciones: "Ver",
    },
    {
      id: "3",
      fecha_salida: "2023-01-01",
      hora_salida: "12:00",
      precio_nivel_uno: 10,
      precio_nivel_dos: 20,
      asientos_ocupados: 2,
      acciones: "Ver",
    },
    {
      id: "4",
      fecha_salida: "2023-01-01",
      hora_salida: "12:00",
      precio_nivel_uno: 10,
      precio_nivel_dos: 20,
      asientos_ocupados: 2,
      acciones: "Ver",
    },
    {
      id: "5",
      fecha_salida: "2023-01-01",
      hora_salida: "12:00",
      precio_nivel_uno: 10,
      precio_nivel_dos: 20,
      asientos_ocupados: 2,
      acciones: "Ver",
    },
    {
      id: "6",
      fecha_salida: "2023-01-01",
      hora_salida: "12:00",
      precio_nivel_uno: 10,
      precio_nivel_dos: 20,
      asientos_ocupados: 2,
      acciones: "Ver",
    },
    {
      id: "7",
      fecha_salida: "2023-01-01",
      hora_salida: "12:00",
      precio_nivel_uno: 10,
      precio_nivel_dos: 20,
      asientos_ocupados: 2,
      acciones: "Ver",
    }
  ]

  const handleOpenDialog = () => {
    const dialog = document.getElementById('dialog-programacion-viaje') as HTMLDialogElement
    if (dialog) dialog.showModal()
  }

  return (
    <>
      <section className="bg-inherit w-[80%] text-white flex flex-col gap-10">
        <div className="flex justify-between py-6">
          <h3 className="text-4xl font-bold text-nowrap">Programacion Viaje</h3>
          <NewButton
            className="max-w-44"
            onClick={handleOpenDialog}
          >
            Crear Nuevo
          </NewButton>
        </div>
        <div className="overflow-x-scroll w-full">
          <Table
            columns={columns}
            data={data}
          />
        </div>
      </section>
      <DialogAddEdit
        id="dialog-programacion-viaje"
      >
        <FormProgramacionViaje />
      </DialogAddEdit>
    </>
  )
}
