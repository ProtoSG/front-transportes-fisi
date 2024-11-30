import { Asiento, AsientoBack } from "../models/asiento.model";

export const asientoAdapter = (asiento: AsientoBack): Asiento => ({
  id: asiento.id_asiento,
  nivel: asiento.nivel,
  numero: asiento.numero,
  id_bus: asiento.id_bus,
})

