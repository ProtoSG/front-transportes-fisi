import { DialogAddEdit, Header, Section, Table } from "../../components";
import { createColumns } from "../../services/createColumns";
import { FormBus } from "./components";

export function Bus() {

  const columns = createColumns([
    "id",
    "asientos",
    "placa",
    "marca",
    "niveles",
    "id_tipo_servicio_bus"
  ])

  const data = [
    {
      id: "1",
      asientos: "2",
      placa: "123456",
      marca: "Mercedes",
      niveles: "2",
      id_tipo_servicio_bus: "1"
    },
    {
      id: "2",
      asientos: "2",
      placa: "123456",
      marca: "Mercedes",
      niveles: "2",
      id_tipo_servicio_bus: "1"
    },
    {
      id: "3",
      asientos: "2",
      placa: "123456",
      marca: "Mercedes",
      niveles: "2",
      id_tipo_servicio_bus: "1"
    },
    {
      id: "4",
      asientos: "2",
      placa: "123456",
      marca: "Mercedes",
      niveles: "2",
      id_tipo_servicio_bus: "1"
    },
  ]

  const handleOpenDialog = () => {
    const dialog = document.getElementById('dialog-bus') as HTMLDialogElement
    if (dialog) dialog.showModal()
  }

  return (
    <>
      <Section>
        <Header
          title="Bus"
          onClick={handleOpenDialog}
        />
        <Table
          columns={columns}
          data={data}
        />
      </Section>
      <DialogAddEdit
        id="dialog-bus"
        title="Nuevo Bus"
      >
        <FormBus />
      </DialogAddEdit>
    </>
  )
}
