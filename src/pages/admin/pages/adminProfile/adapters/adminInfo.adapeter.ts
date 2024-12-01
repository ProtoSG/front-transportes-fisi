import { AdminInfo, AdminInfoBack } from "../models/adminInfo.model";

export const adminInfoAdapter = (admin: AdminInfoBack): AdminInfo => {
  return {
    id: admin.id_admin,
    username: admin.username,
    nombre: admin.nombre,
    apellidoPat: admin.apellido_pat,
    apellidoMat: admin.apellido_mat,
    email: admin.correo,
    dni: admin.dni,
    fechaNacimiento: admin.fecha_nacimiento,
    sexo: admin.sexo,
    phone: admin.telefono
  }
}
