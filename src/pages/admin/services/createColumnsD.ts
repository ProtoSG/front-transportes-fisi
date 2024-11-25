export const createColumnsD = (
  keys: string[],
  customRenderers: Record<
    string,
    (row: any) => JSX.Element // Define un renderer personalizado para columnas específicas
  > = {}
) =>
  keys.map((key) => ({
    name: key,
    selector: (row: any) => row[key],
    center: true,
    cell: (row: any) =>
      customRenderers[key] ? customRenderers[key](row) : row[key], // Usa el renderer si está definido
  }));
