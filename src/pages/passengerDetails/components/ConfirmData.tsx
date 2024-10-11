import { NewButton } from "../../../components";
import { CheckQuestion } from "./CheckQuestion";
import { DialogPayment } from "./DialogPayment";

export function ConfirmData() {

  const handleOpenDialog = () => {
    const dialog = document.getElementById("dialog-payment") as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  };

  return (
    <>
      <section className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <CheckQuestion
            question="¿Tienes cupón de descuento?"
            type="input"
          />
          <CheckQuestion
            question="¿Desea factura?"
          />
        </div>
        <div className="border-2 p-6 border-primary-600 rounded flex justify-between items-center">
          <div className="text-nowrap text-lg flex flex-col gap-2">
            <p className="font-semibold text-xl">Detalles de la compra</p>
            <p>Pasajers: <span className="font-bold">2</span></p>
            <p>Asientos: <span className="font-bold">02 04</span></p>
          </div>
          <div className="w-full flex items-center justify-center gap-1 font-bold">S/ <span className="text-3xl">105</span></div>
        </div>
        <div className="flex justify-between bg-primary-500 drop-shadow-xl rounded px-6 py-4 items-center text-white">
          <p className="font-bold text-xl text-nowrap">N° de pasajeros: <span>2</span></p>
          <div className="text-center w-full">
            <p className="italic">Precio Total</p>
            <div className="w-full flex items-center justify-center gap-1 text-xl font-bold">S/ <span className="text-3xl">105</span></div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <NewButton className="text-white text-xl max-w-60" onClick={handleOpenDialog}>Pagar Aquí</NewButton>
        </div>
      </section>
      <DialogPayment />
    </>
  )
}

