import { Viaje } from "../models/viaje.model";
import { ViajeBack } from "../models/viajeBack.model";

export const viajeAdapter = (viaje: ViajeBack): Viaje => {
  return {
    idViaje: viaje.id_viaje,
    embarque: {
      hora: viaje.embarque.hora,
      idTerminal: viaje.embarque.id_embarque,
      ubicacion: viaje.embarque.ubicacion,
    },
    desembarque: {
      hora: viaje.desembarque.hora,
      idTerminal: viaje.desembarque.id_embarque,
      ubicacion: viaje.desembarque.ubicacion,
    },
    servicio: {
      idServicio: viaje.servicio.id_servicio,
      nombre: viaje.servicio.nombre,
    },
    bus: {
      idBus: viaje.bus.id_bus,
      piso: viaje.bus.piso,
    },
    asientosDisponibles: viaje.asientos_disponibles,
    precio: viaje.precio,
  }
};

