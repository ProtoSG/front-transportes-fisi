import { Asiento } from "../models/asiento.model";
import { AsientoBack } from "../models/asientoBack.model";

export const asientoAdapter = (asiento: AsientoBack): Asiento => {
  return {
    idAsiento: asiento.id_asiento,
    idBus: asiento.id_bus,
    numeroAsiento: asiento.numero_asiento,
    piso: asiento.piso,
    precio: asiento.precio,
    disponibilidad: asiento.disponibilidad
  }
}
