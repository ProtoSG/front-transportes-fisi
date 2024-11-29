import { Section, Header, Table } from "../../../components";
import { addActionsButtons } from "../../../services/addActionsButtons.service";
import { createColumns } from "../../../services/createColumns";
import { useConductor } from "../hooks/useConductor";
import { useEditConductor } from "../hooks/useEditConductor";
import { Conductor } from "../models/conductor.model";
import { ChangeStatusConductorButton } from "./ChangeStatusConductorButton";

export function MainConductor() {
  const columns = createColumns([
    "id",
    "nombre",
    "apellidoPaterno",
    "apellidoMaterno",
    "dni",
    "sexo",
    "estado",
    "acciones",
  ])

  const { data, loading, error } = useConductor()

  const { setIsEdit, setData } = useEditConductor()

  const id = "dialog-conductor"

  const handleOpenDialog = () => {
    setIsEdit(false)
    const dialog = document.getElementById(id) as HTMLDialogElement;
    if (dialog) dialog.showModal();
    setData({
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      dni: "",
      sexo: "",
    } as Conductor)
  };

  const newData = addActionsButtons<Conductor>({
    data, id, setIsEdit, setData,
    actions: (conductor: Conductor) => (
      <ChangeStatusConductorButton data={conductor} />
    )
  })

  return (
    <Section>
      <Header
        title="Conductor"
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
