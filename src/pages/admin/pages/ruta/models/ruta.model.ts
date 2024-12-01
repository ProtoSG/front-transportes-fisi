export type Ruta= {
  id: number;
  duracion_estimada: string,
  distancia: number,
  estado: string,
  id_origen: number,
  id_destino: number,
}

export type RutaBack= {
  id_ruta: number,
  duracion_estimada: string,
  distancia: number,
  estado: string,
  id_origen: number,
  id_destino: number,
}

export type RutaCreate={
  duracion_estimada: string,
  distancia: number,
  estado: string,
  id_origen: number,
  id_destino: number,
}