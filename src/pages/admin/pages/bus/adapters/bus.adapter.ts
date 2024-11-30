import { Bus,BusBack } from "../models/bus.model";

export const busAdapter = (bus: BusBack): Bus => ({
  id: bus.id_bus,
  asientos: bus.asientos,
  placa: bus.placa,
  marca: bus.marca,
  niveles: bus.niveles,
  id_tipo_servicio_bus: bus.id_tipo_servicio_bus,
})