import { ReactNode } from "react"
import { CloseIcon } from "../../../icons"

interface DialogAddEditProps {
  id: string
  children: ReactNode
  title: string
}

export function DialogAddEdit({ id, children, title }: DialogAddEditProps) {

  const handleCloseDialog = () => {
    const dialog = document.getElementById(id) as HTMLDialogElement
    if (dialog) dialog.close()
  }

  return (
    <dialog
      id={id}
      className="m-auto gap-12 px-12 drop-shadow-2xl relative py-12 rounded-lg bg-primary-800 text-white focus:outline-none backdrop:backdrop-blur-xl min-w-96"
    >
      <div className="flex flex-col gap-10">
        <span
          onClick={handleCloseDialog}
          className="absolute right-4 top-4 hover:cursor-pointer hover:scale-110"
        >
          <CloseIcon className="text-white" />
        </span>
        <span className="text-2xl text-center font-semibold">{title}</span>
        {children}
      </div>
    </dialog>
  )
}
