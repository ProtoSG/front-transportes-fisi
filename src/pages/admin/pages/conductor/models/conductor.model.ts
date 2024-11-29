export type Conductor = {
  id: number,
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  dni: string,
  sexo: string,
  estado: string
}

export type ConductorBack = {
  id_chofer: number;
  nombre: string;
  apellido_pat: string;
  apellido_mat: string;
  dni: string;
  sexo: string;
  estado: string;
}

export interface ConductorCreate {
  nombre: string,
  apellido_pat: string,
  apellido_mat: string,
  dni: string,
  sexo: string,
}

export interface ConductorUpdate extends ConductorCreate {
  id_chofer: number
}

export type ConductorStatus = {
  id_chofer: number,
}
