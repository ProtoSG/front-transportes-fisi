export type Asiento = {
  idAsiento: number;
  // idBus: number;
  numeroAsiento: number;
  piso: number;
  precio: number;
  disponibilidad: "Disponible" | "Ocupado";
}
