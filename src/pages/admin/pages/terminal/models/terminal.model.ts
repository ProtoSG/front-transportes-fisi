export type Terminal = {
  id: number;
  nombre: string;
  departamento: string;
  provincia: string;
}

export type TerminalBack = {
  id_terminal: number;
  nombre: string;
  departamento: string;
  provincia: string;
}

export type TerminalCreate = {
  nombre: string;
  departamento: string;
  provincia: string;
}