export type Asiento= {
  id: number;
  nivel: number;
  numero: number;
  id_bus: number;
}

export type AsientoBack = {
  id_asiento: number;
  nivel: number;  
  numero: number;
  id_bus: number;
}

export type AsientoCreate = {
  nivel:number,
  numero:number,
  id_bus:number,
}