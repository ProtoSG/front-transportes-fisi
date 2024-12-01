import { EditIcon } from "../../../icons";

interface Props<T> {
  data: T;
  id: string;
  setIsEdit: (isEdit: boolean) => void;
  setData: (data: T) => void;
}

export function ActionsButtons<T>({ data, id, setIsEdit, setData }: Props<T>) {
  const handleOpenDialog = () => {
    setIsEdit(true)
    const dialog = document.getElementById(id) as HTMLDialogElement
    if (dialog) dialog.showModal()
    setData(data)
  }

  return (
    <span
      className="hover:text-primary-400 hover:cursor-pointer transition-colors"
      onClick={handleOpenDialog}
    >
      <EditIcon />
    </span>
  )
}
