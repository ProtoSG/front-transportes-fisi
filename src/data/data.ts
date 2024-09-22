export const viaje = {
  id_viaje: 1,
  ruta: {
    id_ruta: 1,
    ciudad_origen: {
      id_ciudad: 1,
      nombre: "Lima",
      utl_img: ""
    },
    ciudad_destino: {
      id_ciudad: 2,
      nombre: "Trujillo",
      utl_img: ""
    },
    precio: 100,
  },
  fecha_salida: "2024-09-09",
  hora_embarque: "09:00 h",
  terminal_embarque: {
    id_terminal: 1,
    nombre: "Terminal 1",
    ubicacion: "Av. Nicolás Arriola 780, La Victoria - Lima",
  },
  hora_desembarque: "10:00 h",
  terminal_desembarque: {
    id_terminal: 2,
    nombre: "Terminal 2",
    ubicacion: "Av. Nicolás Arriola 780, La Victoria - Lima",
  },
  estado: "",
  servicio: {
    id_servicio: 1,
    nombre: "Ejecutivo VIP",
    descripción: "Ejecutivo VIP",
    precio: 50,
  },
  bus: {
    id_bus: 1,
    capacidad: 30,
    piso: 2,
  },
  precio_viaje: 150,
  asientos_disponibles: 11
}
