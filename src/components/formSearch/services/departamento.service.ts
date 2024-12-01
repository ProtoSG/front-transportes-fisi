import { departamentoDestinoAdapter } from "../adapters/departamento.adapter";
import { Departamento } from "../model/departamento.model";

const api = import.meta.env.VITE_BACKEND_URL

export const getDestinos = async (origen: string) => {
  console.log("ORIGEN", origen)
  const response = await fetch(`${api}/general/destination`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ciudad_origen: origen
    })
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json()
  const destinos: Departamento[] = data.map(departamentoDestinoAdapter)
  return destinos
}

