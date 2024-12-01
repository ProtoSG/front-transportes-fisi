import { Section, Header, Table } from "../../../components";
import { addActionsButtons } from "../../../services/addActionsButtons.service";
import { createColumns } from "../../../services/createColumns";
import { useDescuento } from "../hooks/useDescuento";
import { useEditDescuento } from "../hooks/useEditDescuento";
import { Descuento } from "../models/descuento.model";

export function MainDescuento() {
  const columns = createColumns([
    "id",
    "codigo",
    "monto",
    "estado",
    "idAdmin",
    "acciones"
  ])

  const { data, loading, error } = useDescuento()

  const { setIsEdit, setData } = useEditDescuento()

  const handleOpenDialog = () => {
    setIsEdit(false)
    const dialog = document.getElementById('dialog-descuento') as HTMLDialogElement
    if (dialog) dialog.showModal()
    setData({
      idAdmin: 0,
      codigo: "",
      monto: 0,
      estado: "",
    } as Descuento)
  }

  const id = "dialog-descuento"
  const newData = addActionsButtons<Descuento>({ data, id, setIsEdit, setData })

  return (
    <Section>
      <Header
        title="Descuento"
        onClick={handleOpenDialog}
      />
      <Table
        columns={columns}
        data={newData}
        loading={loading}
        error={error}
      />
    </Section>
  )
}
