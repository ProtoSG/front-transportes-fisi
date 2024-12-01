import { Header, Section, Table } from "../../../components";
import { addActionsButtons } from "../../../services/addActionsButtons.service";
import { createColumns } from "../../../services/createColumns";
import { useEditRuta } from "../hooks/useEditRuta";
import { useRuta } from "../hooks/useRuta";
import { Ruta } from "../models/ruta.model";

export function MainRuta () {
  const columns = createColumns([
    "id",
    "duracion_estimada",
    "distancia",
    "estado",
    "id_origen",
    "id_destino",
    "acciones"
  ])

  const { data, loading, error } = useRuta()

  const { setIsEdit, setData } = useEditRuta()

  const id = "dialog-ruta"

  const handleOpenDialog = () => {
    setIsEdit(false)
    const dialog = document.getElementById(id) as HTMLDialogElement
    if (dialog) dialog.showModal()
    setData({
      id: 0,
      duracion_estimada:"",
      distancia:0,
      estado:"",
      id_origen:0,
      id_destino:0
    } as Ruta)
  }

  const newData = addActionsButtons<Ruta>({ data, id, setData,setIsEdit  })

  return (
    <Section>
      <Header
        title="Rutas"
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