import { FormEvent, useEffect, useState } from "react";
import { NewButton } from "../../../../components";
import { useDiscountId } from "../hooks/useDiscountId";
import { useTransactionData } from "../../../../hooks/useTransactionData";
import { useTipoBoletaId } from "../hooks/useTipoBoletaId";
import { toast } from "sonner";
import { usePriceTotal } from "../../../../hooks/usePriceTotal";

interface CheckQuestionProps {
  question: string
  type?: "input" | "switch"
}

export function CheckQuestion({ question, type }: CheckQuestionProps) {
  const [active, setActive] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [ruc, setRuc] = useState("");
  const [tipo, setTipo] = useState<"boleta" | "factura">("boleta");
  const { setIdDescuento, setTipoBoleta, setRuc: setRucTransaction } = useTransactionData()
  const { decrementTotal } = usePriceTotal()

  const handleActive = () => {
    setActive(!active);
    type === 'switch' && !active ? setTipo("factura") : setTipo("boleta")
  }

  useEffect(() => {
    setTipoBoleta(tipo)
  }, [tipo])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === "codigo") setCodigo(value);
    if (name === "ruc") setRuc(value);
  }

  const handleSubmitDiscount = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data } = await useDiscountId({ codigo })

    setIdDescuento(data?.id)
    decrementTotal(data?.monto)
    if (data?.id) return toast.success("Se ha guardado el descuento")
    return toast.error("No se ha encontrado el descuento")
  }

  const handleSubmitRuc = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setRucTransaction(ruc)
    toast.success("Se ha guardado el RUC")
  }

  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold text-xl">{question}</p>
        <span className={`w-12 relative border-2 border-primary-400 rounded-full hover:cursor-pointer before:transition-transform
                    before:absolute before:size-5 before:bg-primary-400 before:m-[2px] before:rounded-full
                    ${active ? 'before:translate-x-5 bg-primary-400 before:bg-primary-50' : ''}`}
          onClick={handleActive}
        >
        </span>
      </div>
      {
        type === 'input' && active && (
          <form className="flex flex-col gap-4" onSubmit={handleSubmitDiscount}>
            <input
              type="text"
              name="codigo"
              placeholder="Ingrese su código"
              value={codigo}
              onChange={handleChange}
              className={`w-full p-2  border-[1px] border-primary-800 rounded-md bg-transparent focus:outline-none`}
            />
            <NewButton
              type="submit"
              className="text-white w-full"
            >
              Agregar
            </NewButton>
          </form>
        )
      }
      {
        type === 'switch' && active && (
          <form className="flex flex-col gap-4" onSubmit={handleSubmitRuc}>
            <input
              type="text"
              name="ruc"
              placeholder="Ingrese su RUC"
              value={ruc}
              onChange={handleChange}
              className={`w-full p-2  border-[1px] border-primary-800 rounded-md bg-transparent focus:outline-none`}
            />
            <NewButton
              type="submit"
              className="text-white w-full"
            >
              Aceptar
            </NewButton>
          </form>
        )
      }
    </>
  )
}
