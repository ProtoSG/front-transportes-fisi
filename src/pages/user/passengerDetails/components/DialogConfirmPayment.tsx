import { CloseIcon } from "../../../../icons";

export function DialogConfirmPayment() {

  const handleCloseDialog = () => {
    const dialog = document.getElementById("dialog-confirm-payment") as HTMLDialogElement;
    if (dialog) dialog.close();
  };

  return (
    <dialog
      id="dialog-confirm-payment"
      className="m-auto  gap-12 px-12 drop-shadow-2xl relative py-12 rounded-lg focus:outline-none backdrop:backdrop-blur-xl"
    >
      <div className="flex flex-col gap-12">
        <span
          className="absolute right-4 top-4 hover:scale-110 hover:cursor-pointer transition-transform"
          onClick={handleCloseDialog}
        >
          <CloseIcon />
        </span>
        <section className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold">Selecciona el método de pago</h3>
        </section>
      </div>
    </dialog>
  )
}
