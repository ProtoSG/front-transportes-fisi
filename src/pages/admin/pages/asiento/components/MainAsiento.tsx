import { Header, Section, Table } from "../../../components";
import { addActionsButtons } from "../../../services/addActionsButtons.service";
import { createColumns } from "../../../services/createColumns";
import { useEditAsiento } from "../hooks/useEditAsiento";
import { Asiento } from "../models/asiento.model";
import { useAsiento } from "../hooks/useAsiento";

export function MainAsiento(){
  const columns = createColumns([
    "id",
    "nivel",
    "numero",
    "id_bus",
    "acciones"
  ])


const { data, loading, error } = useAsiento()
const { setIsEdit, setData } = useEditAsiento()

const id = "dialog-asiento"
const handleOpenDialog = () => {
  setIsEdit(false)
  const dialog = document.getElementById(id) as HTMLDialogElement
  if (dialog) dialog.showModal()
  setData({
    id: 0,
    nivel: 0,
    numero: 0,
    id_bus: 0
  } as Asiento)
}

const newData = addActionsButtons<Asiento>({ data, id, setData, setIsEdit })

return (
  <Section>
    <Header
      title="Asientos"
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