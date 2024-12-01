import { ReactNode } from "react";
import { ActionsButtons } from "../components";

interface Props<T> {
  data: T[]
  id: string
  setIsEdit: (isEdit: boolean) => void
  setData: (data: T) => void
  actions?: (data: T) => ReactNode
}

export const addActionsButtons = <T,>({ data, id, setIsEdit, setData, actions }: Props<T>) => {
  return (
    data.map(item => ({
      ...item,
      acciones: (
        <div className="flex gap-4 items-center">
          <ActionsButtons data={item} id={id} setIsEdit={setIsEdit} setData={setData} />
          {actions && actions(item)}
        </div>
      )
    })) || []
  )
}
