import { Header, Section, Table } from "../../../components";
import { addActionsButtons } from "../../../services/addActionsButtons.service";
import { createColumns } from "../../../services/createColumns";
import { useEditBus } from "../hooks/useEditBus";
import { useBus } from "../hooks/useBus";
import { Bus } from "../models/bus.model";

export function MainBus () {
  const columns = createColumns([
    "id",
    "asientos",
    "placa",
    "marca",
    "niveles",
    "id_tipo_servicio_bus",
    "acciones"
  ])

  const { data, loading, error } = useBus()

  const { setIsEdit, setData } = useEditBus()

  const id = "dialog-bus"

  const handleOpenDialog = () => {
    setIsEdit(false)
    const dialog = document.getElementById(id) as HTMLDialogElement
    if (dialog) dialog.showModal()
    setData({
      id: 0,
      asientos: 0,
      placa: "",
      marca: "",
      niveles: 0,
      id_tipo_servicio_bus: 0
    } as Bus)
  }

  const newData = addActionsButtons<Bus>({ data, id, setData,setIsEdit  })

  return (
    <Section>
      <Header
        title="Buses"
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