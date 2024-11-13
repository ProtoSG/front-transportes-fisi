export const createColumns = (keys: string[]) =>
  keys.map((key) => ({
    name: key,
    selector: (row: any) => row[key],
    // sortable: true,
    center: "true",
    // compact: true,
    cell: (row: any) => row[key],
  }))
