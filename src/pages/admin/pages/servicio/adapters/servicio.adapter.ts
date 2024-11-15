import { Servicio, ServicioBack } from "../models/servicio.model";

export const servicioAdapter = (servicio: ServicioBack): Servicio => ({
  id: servicio.id_tipo_servicio_bus,
  servicio: servicio.servicio,
})

