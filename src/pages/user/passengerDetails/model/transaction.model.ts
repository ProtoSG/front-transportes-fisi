export type Transaction = {
  correo_contacto: string,
  fecha_compra: string,
  id_cliente: number,
  id_descuento?: number | null,
  id_metodo_pago: number,
  id_tipo_boleta: number,
  igv: number,
  pasajes: Pasajero[],
  precio_neto: number,
  precio_total: number,
  ruc: string | null,
  telefono_contacto: string
}

export type Pasajero = {
  id_asiento: number,
  id_pasajero: number,
  id_viaje_programado: number,
  igv: number,
  precio_neto: number,
  precio_total: number
}
