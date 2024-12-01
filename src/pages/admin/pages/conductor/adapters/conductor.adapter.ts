import { Conductor, ConductorBack } from "../models/conductor.model";

export const conductorAdapter = (conductor: ConductorBack): Conductor => ({
  id: conductor.id_chofer,
  nombre: conductor.nombre,
  apellidoPaterno: conductor.apellido_pat,
  apellidoMaterno: conductor.apellido_mat,
  dni: conductor.dni,
  sexo: conductor.sexo,
  estado: conductor.estado,
})
