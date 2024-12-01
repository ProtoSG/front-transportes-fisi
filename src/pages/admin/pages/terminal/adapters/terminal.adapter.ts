import { Terminal ,TerminalBack } from "../models/terminal.model";

export const terminalAdapter =(terminal:TerminalBack) : Terminal=>({
  id: terminal.id_terminal,
  nombre: terminal.nombre,
  departamento: terminal.departamento,
  provincia: terminal.provincia,
})