import { Ciudad, CiudadBack } from "../model/ciudad.model";

export const ciudadAdapter = (ciudad: CiudadBack): Ciudad => ({
  id: ciudad.id,
  nombre: ciudad.departamento
})
