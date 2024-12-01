export type Asiento = {
  idAsiento: number;
  // idBus: number;
  idPasajero: number;
  numeroAsiento: number;
  piso: number;
  precio: number;
  disponibilidad: "Disponible" | "Ocupado";
}
