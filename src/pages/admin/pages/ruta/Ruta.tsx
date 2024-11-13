import { DialogAddEdit, Header, Section, Table } from "../../components";
import { createColumns } from "../../services/createColumns";
import { FormRuta } from "./components";

export function Ruta() {

  const columns = createColumns([
    "id",
    "duracion_estimada",
    "distancia",
    "estado",
    "id_origen",
    "id_destino"
  ])

  const data = [
    {
      id: "1",
      duracion_estimada: "20 min",
      distancia: "10 km",
      estado: "En progreso",
      id_origen: "1",
      id_destino: "2"
    },
    {
      id: "2",
      duracion_estimada: "20 min",
      distancia: "10 km",
      estado: "En progreso",
      id_origen: "1",
      id_destino: "2"
    },
    {
      id: "3",
      duracion_estimada: "20 min",
      distancia: "10 km",
      estado: "En progreso",
      id_origen: "1",
      id_destino: "2"
    },
    {
      id: "4",
      duracion_estimada: "20 min",
      distancia: "10 km",
      estado: "En progreso",
      id_origen: "1",
      id_destino: "2"
    },
  ]

  const handleOpenDialog = () => {
    const dialog = document.getElementById('dialog-ruta') as HTMLDialogElement
    if (dialog) dialog.showModal()
  }


  return (
    <>
      <Section>
        <Header
          title="Ruta"
          onClick={handleOpenDialog}
        />
        <Table
          columns={columns}
          data={data}
        />
      </Section>
      <DialogAddEdit
        id="dialog-ruta"
        title="Nuevo Ruta"
      >
        <FormRuta />
      </DialogAddEdit>
    </>
  )
}
