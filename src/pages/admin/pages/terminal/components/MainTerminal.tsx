import { Header, Section, Table } from "../../../components";
import { addActionsButtons } from "../../../services/addActionsButtons.service";
import { createColumns } from "../../../services/createColumns";
import { useEditTerminal } from "../hooks/useEditTerminal";
import { useTerminal } from "../hooks/useTerminal";
useEditTerminal
import { Terminal } from "../models/terminal.model";

export function MainTerminal(){
  const columns= createColumns([
    "id",
    "nombre",
    "departamento",
    "provincia",
    "acciones"
  ])

  const { data, loading, error } = useTerminal()
  const { setIsEdit, setData } = useEditTerminal()
  const id = "dialog-terminal"
  const handleOpenDialog = () => {
    setIsEdit(false)
    const dialog = document.getElementById(id) as HTMLDialogElement
    if (dialog) dialog.showModal()
    setData({
      id: 0,
      nombre: "",
      departamento: "",
      provincia: ""
    } as Terminal)
  }
  const newData = addActionsButtons<Terminal>({ data, id, setData,setIsEdit  })

  return (
    <Section>
      <Header
        title="Terminales"
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