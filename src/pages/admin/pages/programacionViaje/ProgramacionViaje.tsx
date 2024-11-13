import { DialogAddEdit, Header, Section, Table } from "../../components";
import { FormProgramacionViaje } from "./components";
import { createColumns } from "../../services/createColumns";

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
      <Section>
        <Header
          title="Programacion Viaje"
          onClick={handleOpenDialog}
        />
        <Table
          columns={columns}
          data={data}
        />
      </Section>
      <DialogAddEdit
        id="dialog-programacion-viaje"
        title="Nuevo Viaje"
      >
        <FormProgramacionViaje />
      </DialogAddEdit>
    </>
  )
}
