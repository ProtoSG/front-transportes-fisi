import { DialogAddEdit, Header, Section, Table } from "../../components";
import { createColumns } from "../../services/createColumns";
import { FormConductor } from "./components/FormConductor";

export function Conductor() {

  // id_chofer    int auto_increment
  //   primary key,
  // nombre       varchar(255) not null,
  // apellido_pat varchar(50)  not null,
  // apellido_mat varchar(50)  not null,
  // dni          varchar(8)   not null,
  // sexo         varchar(15)  not null
  const columns = createColumns([
    "id",
    "nombre",
    "apellido_pat",
    "apellido_mat",
    "dni",
    "sexo"
  ])

  const data = [
    {
      id: "1",
      nombre: "Conductor 1",
      apellido_pat: "Apellido Pat 1",
      apellido_mat: "Apellido Mat 1",
      dni: "12345678",
      sexo: "Masculino"
    },
    {
      id: "2",
      nombre: "Conductor 2",
      apellido_pat: "Apellido Pat 2",
      apellido_mat: "Apellido Mat 2",
      dni: "12345678",
      sexo: "Masculino"
    },
    {
      id: "3",
      nombre: "Conductor 3",
      apellido_pat: "Apellido Pat 3",
      apellido_mat: "Apellido Mat 3",
      dni: "12345678",
      sexo: "Masculino"
    },
    {
      id: "4",
      nombre: "Conductor 4",
      apellido_pat: "Apellido Pat 4",
      apellido_mat: "Apellido Mat 4",
      dni: "12345678",
      sexo: "Masculino"
    },
  ]

  const handleOpenDialog = () => {
    const dialog = document.getElementById('dialog-conductor') as HTMLDialogElement
    if (dialog) dialog.showModal()
  }

  return (
    <>
      <Section>
        <Header
          title="Conductor"
          onClick={handleOpenDialog}
        />
        <Table
          columns={columns}
          data={data}
        />
      </Section>
      <DialogAddEdit
        id="dialog-conductor"
        title="Nuevo Conductor"
      >
        <FormConductor />
      </DialogAddEdit>
    </>
  )
}
