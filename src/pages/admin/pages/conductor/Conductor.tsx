import { DialogAddEdit, Header, Section, Table } from "../../components";
import { createColumnsD } from "../../services/createColumnsD";
import { FormConductor } from "./components/FormConductor";
import { useChoferHired } from "../../../../hooks/useChofer";

export function Conductor() {
  // Columnas para la tabla
  const columns = createColumnsD([
    "id_chofer",
    "nombre",
    "apellido_pat",
    "apellido_mat",
    "dni",
    "sexo",
    "Accion",
  ],{
    Accion: (row) => (
      <button
        onClick={() => alert(`Botón clickeado para el chofer: ${row.nombre}`)}
        style={{ padding: "5px 10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}
      >
        Eliminar
      </button>
    ),
  });

  const {
    data: choferes,
    loading,
    error,
  } = useChoferHired({
    url: "/chofer/hired",
    jsonAdapter: (chofer) => ({
      id_chofer: chofer.id_chofer,
      nombre: chofer.nombre,
      apellido_pat: chofer.apellido_pat,
      apellido_mat: chofer.apellido_mat,
      dni: chofer.dni,
      sexo: chofer.sexo,
      estado: chofer.estado,
    }),
  });

  const handleOpenDialog = () => {
    const dialog = document.getElementById(
      "dialog-conductor"
    ) as HTMLDialogElement;
    if (dialog) dialog.showModal();
  };

  return (
    <>
      <Section>
        <Header title="Conductor" onClick={handleOpenDialog} />

        {/* Mostrar mensajes de carga o error */}
        {loading ? (
          <p>Cargando conductores...</p>
        ) : error ? (
          <p>Error al cargar los conductores: {error.message}</p>
        ) : (
          <Table columns={columns} data={choferes || []} />
        )}
      </Section>

      <DialogAddEdit id="dialog-conductor" title="Nuevo Conductor">
        <FormConductor />
      </DialogAddEdit>
    </>
  );
}
