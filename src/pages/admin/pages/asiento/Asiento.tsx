import { DialogAddEdit, Header, Section, Table } from "../../components";
import { createColumns } from "../../services/createColumns";
import { FormAsiento } from "./components";

export function Asiento() {
  const columns = createColumns([
    "id",
    "nivel",
    "numero",
    "id_bus"
  ])

  const data = [
    {
      id: "1",
      nivel: "1",
      numero: "1",
      id_bus: "1"
    },
    {
      id: "2",
      nivel: "1",
      numero: "1",
      id_bus: "1"
    },
    {
      id: "3",
      nivel: "1",
      numero: "1",
      id_bus: "2"
    },
    {
      id: "4",
      nivel: "1",
      numero: "1",
      id_bus: "2"
    },
  ]

  const handleOpenDialog = () => {
    const dialog = document.getElementById('dialog-asiento') as HTMLDialogElement
    if (dialog) dialog.showModal()
  }

  return (
    <>
      <Section>
        <Header
          title="Asiento"
          onClick={handleOpenDialog}
        />
        <Table
          columns={columns}
          data={data}
        />
      </Section>
      <DialogAddEdit
        id="dialog-asiento"
        title="Nuevo Asiento"
      >
        <FormAsiento />
      </DialogAddEdit>
    </>
  )
}
