import { Viaje } from "../models/viaje.model";
import { ViajeBack } from "../models/viajeBack.model";

export const viajeAdapter = (viaje: ViajeBack): Viaje => {
  return {
    idViaje: viaje.id_viaje_programado,
    embarque: {
      hora: viaje.hora_salida,
      ubicacion: viaje.origen,
    },
    desembarque: {
      hora: viaje.hora_llegada,
      ubicacion: viaje.destino,
    },
    servicio: {
      nombre: viaje.servicio,
    },
    asientosDisponibles: viaje.asientos_disponibles,
    precio: viaje.precio_min,
    distancia: viaje.distancia,
    duracion: viaje.duracion,
  }
};

