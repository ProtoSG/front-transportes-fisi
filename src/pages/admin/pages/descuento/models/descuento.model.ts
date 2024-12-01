export type Descuento = {
  id: number,
  codigo: string,
  monto: number,
  estado: string,
  idAdmin: number
}

export type DescuentoBack = {
  id_descuento: number,
  codigo: string,
  monto: number,
  estado: string,
  id_admin: number
}

export type DescuentoCreate = {
  codigo: string,
  monto: number,
  estado: string,
}

export type DescuentoMessage = {
  message: string
}
