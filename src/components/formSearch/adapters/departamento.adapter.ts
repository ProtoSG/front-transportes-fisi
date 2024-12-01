import { Departamento, DepartamentoDestinoBack, DepartamentoOrigenBack } from "../model/departamento.model";

export const departamentoOrigenAdapter = (departamento: DepartamentoOrigenBack): Departamento => ({
  nombre: departamento.ciudad_origen
})

export const departamentoDestinoAdapter = (departamento: DepartamentoDestinoBack): Departamento => ({
  nombre: departamento.ciudad_destino
})
