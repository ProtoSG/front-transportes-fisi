import { Dni, DniBack } from "../model/dni.model";

export const dniAdapter = (dni: DniBack): Dni => {
  return {
    numero: dni.numero,
    nombreCompleto: dni.nombre_completo,
    nombres: dni.nombres,
    apellidos: dni.apellido_paterno + " " + dni.apellido_materno,
    apellidoPaterno: dni.apellido_paterno,
    apellidoMaterno: dni.apellido_materno,
  }
}
