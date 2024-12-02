import { CloseIcon, VisaIcon } from "../../../../icons";
import { CreditCardProps, useGetClientPaymentMethods } from "../../../client/hooks/api/useClientPaymentMethods";
import { Control, Controller, FieldError, SubmitHandler, useForm } from "react-hook-form";
import { FormConfirmPaymentData, schemaFormConfirmPayment } from "../model/formConfirmPayment.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewButton } from "../../../../components";
import { ErrorInput } from "../../../../components/formSearch/components/ErrorInput";
import { usePriceTotal } from "../../../../hooks/usePriceTotal";
import { useTransactionData } from "../../../../hooks/useTransactionData";
import { useClient } from "../../../../hooks/useClient";
import { useTipoBoletaId } from "../hooks/useTipoBoletaId";
import { useSeatsSelected } from "../../../../hooks/useSeatsSelected";
import { postTransaction } from "../services/transaction.service";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function DialogConfirmPayment() {
  const { creditCards, loading, error } = useGetClientPaymentMethods()
  const { total } = usePriceTotal()
  const { telefono, correo, idDescuento, tipoBoleta, ruc, idViaje, descuento } = useTransactionData()
  const { seats } = useSeatsSelected()

  const { user } = useClient()

  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors } } = useForm<FormConfirmPaymentData>({
    resolver: zodResolver(schemaFormConfirmPayment),
    defaultValues: {
      idTarjeta: creditCards && creditCards.length > 0 ? parseInt(creditCards[0].id_metodo_pago) : 1,
    },
  })

  const handleCloseDialog = () => {
    const dialog = document.getElementById("dialog-confirm-payment") as HTMLDialogElement;
    if (dialog) dialog.close();
  };

  const onSubmit: SubmitHandler<FormConfirmPaymentData> = async (data) => {

    const { id_tipo_boleta } = await useTipoBoletaId({ tipo: tipoBoleta })

    const descuentoPorPasajero = descuento / seats.length
    const pasajeros = seats.map((seat) => {
      const total = seat.precio - descuentoPorPasajero
      const precioNetoPasajero = total / 1.18

      return {
        precio_neto: precioNetoPasajero,
        igv: seat.precio - precioNetoPasajero,
        precio_total: total,
        id_pasajero: seat.idPasajero,
        id_asiento: seat.idAsiento,
        id_viaje_programado: idViaje
      }
    })

    const precioNetoTotal = total / 1.18

    const body = {
      precio_neto: precioNetoTotal,
      igv: total - precioNetoTotal,
      precio_total: total,
      fecha_compra: getCurrentDateTime(),
      ruc: tipoBoleta === "factura" ? ruc : null,
      correo_contacto: correo,
      telefono_contacto: telefono,
      id_cliente: user.id,
      id_descuento: idDescuento ? idDescuento : null,
      id_tipo_boleta: id_tipo_boleta,
      id_metodo_pago: data.idTarjeta,
      pasajes: pasajeros
    }

    const { success, message } = await postTransaction({ body })
    handleCloseDialog()

    if (success) {
      console.log({ success, message })
      const dialog = document.getElementById("dialog-loading") as HTMLDialogElement

      setTimeout(() => {
        if (dialog) {
          dialog.showModal();

          setTimeout(() => {
            dialog.close();
            toast.success(message)

            setTimeout(() => {
              navigate("/client/compra")
            }, 1000)
          }, 3000);
        }
      }, 200);
    }

    if (!success) return toast.error(message)
  }

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
          <h3 className="text-2xl font-bold text-center">Selecciona el método de pago</h3>
          {
            loading ? (
              <span>Cargando</span>
            ) : (
              <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="grid grid-cols-2 gap-8">
                  {
                    creditCards && creditCards.map((creditCard) => (
                      <ItemConfirmPayment
                        control={control}
                        key={creditCard.id_metodo_pago}
                        creditCard={creditCard}
                        error={errors.idTarjeta}
                      />
                    ))
                  }
                </fieldset>
                <NewButton
                  type="submit"
                  className="text-white w-full"
                >
                  Realizar Pago
                </NewButton>
              </form>
            )
          }
        </section>
      </div>
    </dialog>
  )
}

interface ItemConfirmPaymentProps {
  creditCard: CreditCardProps
  control: Control<FormConfirmPaymentData>
  error?: FieldError
}

export function ItemConfirmPayment({ creditCard, control, error }: ItemConfirmPaymentProps) {
  return (
    <Controller
      name="idTarjeta"
      control={control}
      render={({ field }) => (
        <div className=" w-full">
          <label
            className={`flex  gap-4 px-3 py-2 rounded-lg hover:bg-primary-100 hover:cursor-pointer transition-colors bg-primary-100`}
          >
            <input
              {...field}
              type="radio"
              value={parseInt(creditCard.id_metodo_pago)}
              checked={field.value === parseInt(creditCard.id_metodo_pago)}
              onChange={(e) => field.onChange(parseInt(e.target.value))}
            />
            <div className="w-full flex flex-col gap-2">
              <h2 className="text-lg font-bold">{creditCard.nombre}</h2>
              <div className="flex gap-2 items-center">
                <VisaIcon className="text-white" />
                <h1 className="text-lg font-medium">{creditCard.numero_tarjeta}</h1>
              </div>
            </div>
          </label>
          <ErrorInput error={error} />
        </div>
      )}
    />
  )
}

function getCurrentDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
