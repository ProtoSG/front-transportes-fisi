const api = import.meta.env.VITE_BACKEND_URL

interface Props {
  tipo: string
}

export const useTipoBoletaId = async ({ tipo }: Props) => {
  try {
    const response = await fetch(`${api}/tipo_boleta/${tipo}`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    return { error }
  }
}
