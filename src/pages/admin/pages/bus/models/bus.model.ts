export type Bus = {
  id: number;
  asientos: number;
  placa: string;
  marca: string;
  niveles: number;
  id_tipo_servicio_bus: number;
}
export type BusBack = {
  id_bus: number;
  asientos: number;
  placa: string;
  marca: string;
  niveles: number;
  id_tipo_servicio_bus: number;
}
// formulario de creacion de bus
export type BusCreate = {
  asientos: number,
  placa: string,
  marca: string,
  niveles: number,
  id_tipo_servicio_bus: number,
}