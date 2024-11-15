import { ActionsButtons } from "../components";

interface Props<T> {
  data: T[]
  id: string
  setIsEdit: (isEdit: boolean) => void
  setData: (data: T) => void
}

export const addActionsButtons = <T,>({ data, id, setIsEdit, setData }: Props<T>) => {
  return (
    data.map(items => ({
      ...items,
      acciones: <ActionsButtons data={items} id={id} setIsEdit={setIsEdit} setData={setData} />
    })) ?? []
  )
}
