import { Asiento } from "../models/asiento.model";
import { AsientoBack } from "../models/asientoBack.model";

export const asientoAdapter = (asiento: AsientoBack): Asiento => {
  return {
    idAsiento: asiento.id_asiento,
    numeroAsiento: asiento.numero,
    piso: asiento.nivel,
    precio: parseFloat(asiento.precio),
    disponibilidad: asiento.estado
  }
}
