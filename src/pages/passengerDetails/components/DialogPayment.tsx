import { CardIcon, CloseIcon, TicketIcon } from "../../../icons";
import { FormPayment } from "./formPayment/FormPayment";
import { PaymentMethod } from "./PaymentMethod";

export function DialogPayment() {

  const handleCloseDialog = () => {
    const dialog = document.getElementById("dialog-payment") as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  };

  return (
    <dialog
      id="dialog-payment"
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
          <div className="flex justify-between items-end border-b-2 pb-4 border-black border-dashed">
            <TicketIcon />
            <div className="flex flex-col items-end">
              <p className="font-bold">Número de Pedido</p>
              <span>12345678</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <PaymentMethod name="Tarjeta" icon={<CardIcon />} active />
              <PaymentMethod name="Tarjeta" icon={<CardIcon />} />
              <PaymentMethod name="Tarjeta" icon={<CardIcon />} />
            </div>
            <p className="text-center">Recuerda activar tus compras por internet</p>
          </div>
        </section>
        <FormPayment />
      </div>
    </dialog>
  )
}


