export interface ViajeBack {
  id_viaje: number,
  embarque: {
    hora: string,
    id_embarque: number,
    ubicacion: string
  },
  desembarque: {
    hora: string,
    id_embarque: number,
    ubicacion: string
  },
  servicio: {
    id_servicio: number,
    nombre: string
  },
  bus: {
    id_bus: number,
    piso: number
  },
  asientos_disponibles: number,
  precio: number
}
