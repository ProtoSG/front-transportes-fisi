import { DialogAddEdit, Header, Section, Table } from "../../components";
import { createColumns } from "../../services/createColumns";
import { FormTerminal } from "./components";

export function Terminal() {

  const columns = createColumns([
    "id",
    "nombre",
    "departamento",
    "provincia"
  ])

  const data = [
    {
      id: "1",
      nombre: "Terminal 1",
      departamento: "Departamento 1",
      provincia: "Provincia 1"
    },
    {
      id: "2",
      nombre: "Terminal 2",
      departamento: "Departamento 2",
      provincia: "Provincia 2"
    },
    {
      id: "3",
      nombre: "Terminal 3",
      departamento: "Departamento 3",
      provincia: "Provincia 3"
    },
    {
      id: "4",
      nombre: "Terminal 4",
      departamento: "Departamento 4",
      provincia: "Provincia 4"
    },
  ]

  const handleOpenDialog = () => {
    const dialog = document.getElementById('dialog-terminal') as HTMLDialogElement
    if (dialog) dialog.showModal()
  }

  return (
    <>
      <Section>
        <Header
          title="Terminal"
          onClick={handleOpenDialog}
        />
        <Table
          columns={columns}
          data={data}
        />
      </Section>
      <DialogAddEdit
        id="dialog-terminal"
        title="Nuevo Terminal"
      >
        <FormTerminal />
      </DialogAddEdit>
    </>
  )
}
