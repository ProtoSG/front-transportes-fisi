interface Terminal {
  idTerminal: number
  hora: string
  ubicacion: string
}

interface Servicio {
  idServicio: number
  nombre: string
}

interface Bus {
  idBus: number
  piso: number
}

export type Viaje = {
  idViaje: number
  embarque: Terminal
  desembarque: Terminal
  servicio: Servicio
  bus: Bus
  asientosDisponibles: number
  precio: number
}
