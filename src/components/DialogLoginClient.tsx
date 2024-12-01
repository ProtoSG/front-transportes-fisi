import { CloseIcon } from "../icons";
import { FormLogin } from "../pages/login/components";

export function DialogLoginClient() {

  const handleCloseDialog = () => {
    const dialog = document.getElementById("dialog-login-client") as HTMLDialogElement
    if (dialog) dialog.close()
  }

  return (
    <dialog
      id="dialog-login-client"
      className="m-auto gap-12 px-12 drop-shadow-2xl relative py-12 rounded-lg bg-primary-800 text-white focus:outline-none backdrop:backdrop-blur-xl min-w-96"
    >
      <span
        onClick={handleCloseDialog}
        className="absolute right-4 top-4 hover:cursor-pointer hover:scale-110"
      >
        <CloseIcon className="text-white" />
      </span>

      <div className="flex flex-col gap-10">
        <h3 className="text-2xl font-bold text-pretty">Necesita estar loguqdo para acceder a esta sección</h3>
        <FormLogin
          dialog
          onClose={handleCloseDialog}
        />
      </div>
    </dialog>
  )
}
