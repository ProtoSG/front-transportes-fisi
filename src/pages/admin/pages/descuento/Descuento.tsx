import { DialogAddEdit, Header, Section, Table } from "../../components";
import { createColumns } from "../../services/createColumns";
import { FormDescuento } from "./components";

export function Descuento() {

  const columns = createColumns([
    "id",
    "codigo",
    "monto",
    "estado",
    "id_admin"
  ])

  const data = [
    {
      id: "1",
      codigo: "123456",
      monto: "10.00",
      estado: "Activo",
      id_admin: "1"
    },
    {
      id: "2",
      codigo: "123456",
      monto: "10.00",
      estado: "Activo",
      id_admin: "1"
    },
    {
      id: "3",
      codigo: "123456",
      monto: "10.00",
      estado: "Activo",
      id_admin: "1"
    },
    {
      id: "4",
      codigo: "123456",
      monto: "10.00",
      estado: "Activo",
      id_admin: "1"
    },
  ]

  const handleOpenDialog = () => {
    const dialog = document.getElementById('dialog-descuento') as HTMLDialogElement
    if (dialog) dialog.showModal()
  }

  return (
    <>
      <Section>
        <Header
          title="Descuento"
          onClick={handleOpenDialog}
        />
        <Table
          columns={columns}
          data={data}
        />
      </Section>
      <DialogAddEdit
        id="dialog-descuento"
        title="Nuevo Descuento"
      >
        <FormDescuento />
      </DialogAddEdit>
    </>
  )
}
