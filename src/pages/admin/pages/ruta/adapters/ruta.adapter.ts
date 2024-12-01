import { Ruta,RutaBack } from "../models/ruta.model";
export const rutaAdapter = (ruta: RutaBack): Ruta => ({ 
  id: ruta.id_ruta,
  duracion_estimada: ruta.duracion_estimada,
  distancia: ruta.distancia,
  estado: ruta.estado,
  id_origen: ruta.id_origen,
  id_destino: ruta.id_destino,
})