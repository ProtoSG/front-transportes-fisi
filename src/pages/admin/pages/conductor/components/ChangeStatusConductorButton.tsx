import { toast } from "sonner";
import { CloseIcon, ReplaceIcon } from "../../../../../icons";
import { Conductor, ConductorStatus } from "../models/conductor.model";
import { changeStatusConductor } from "../services/conductor.service";
import { useConductor } from "../hooks/useConductor";
import { NewButton, NewSecondaryButton } from "../../../../../components";

interface Props {
  data: Conductor
}

export function ChangeStatusConductorButton({ data }: Props) {
  const { fetchData } = useConductor()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body: ConductorStatus = {
      id_chofer: data.id,
    }

    const { success, message } = await changeStatusConductor(body)
    success ? toast.success(message) : toast.error(message)

    fetchData()
  }

  const dialogId = `dialog-change-status-${data.id}`

  const handleOpenDialog = () => {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement
    if (dialog) dialog.showModal()
  }

  const handleCloseDialog = () => {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement
    if (dialog) dialog.close()
  }

  return (
    <>
      <span
        className="hover:text-primary-400 hover:cursor-pointer transition-colors"
        onClick={handleOpenDialog}
      >
        <ReplaceIcon />
      </span >
      <dialog
        id={`dialog-change-status-${data.id}`}
        className="m-auto gap-12 px-12 drop-shadow-2xl relative py-12 rounded-lg bg-primary-700 text-white focus:outline-none backdrop:backdrop-blur-xl min-w-96"
      >
        <div className="flex flex-col gap-10">
          <span
            onClick={handleCloseDialog}
            className="absolute right-4 top-4 hover:cursor-pointer hover:scale-110"
          >
            <CloseIcon className="text-white" />
          </span>
          <span className="text-2xl text-center font-semibold">Cambiar estado</span>
          <span className="text-lg text-center">¿Está seguro de que desea cambiar el estado de este conductor?</span>
          <div className="flex gap-4 items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full">
              <NewSecondaryButton
                type="submit"
              >
                Si
              </NewSecondaryButton>
            </form>
            <NewButton
              type="button"
              onClick={handleCloseDialog}
            >
              No
            </NewButton>
          </div>
          <p className="text-lg text-center">Estado actual: <strong className="uppercase">{data.estado}</strong></p>
        </div>
      </dialog>
    </>
  )
}
