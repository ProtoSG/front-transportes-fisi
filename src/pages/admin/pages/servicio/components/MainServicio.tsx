import { Header, Section, Table } from "../../../components";
import { addActionsButtons } from "../../../services/addActionsButtons.service";
import { createColumns } from "../../../services/createColumns";
import { useEditServicio } from "../hooks/useEditServicio";
import { useServicio } from "../hooks/useServicio";
import { Servicio } from "../models/servicio.model";

export function MainServicio() {
  const columns = createColumns([
    "id",
    "servicio",
    "acciones"
  ])

  const { data, loading, error } = useServicio()

  const { setIsEdit, setData } = useEditServicio()

  const id = "dialog-servicio"

  const handleOpenDialog = () => {
    setIsEdit(false)
    const dialog = document.getElementById(id) as HTMLDialogElement
    if (dialog) dialog.showModal()
    setData({
      servicio: ""
    } as Servicio)
  }

  const newData = addActionsButtons<Servicio>({ data, id, setIsEdit, setData })

  return (
    <Section>
      <Header
        title="Servicio"
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
