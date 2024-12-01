import { toast, Toaster } from 'sonner'
import { PdfIcon } from '../../../../../icons'
import { useEffect } from 'react'
import { useTransaccion } from '../../../hooks/api/useTransaccion'
const API_URL = import.meta.env.VITE_BACKEND_URL

export const PrintButton = ({ id_transaccion }: { id_transaccion: string }) => {
  const { fetchInfo, error, resetTransactionName, transactionName } = useTransaccion()

  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])

  useEffect(() => {
    if (transactionName) {
      toast.success(`Boleto generado con éxito`)
      const urlTicekt = `${API_URL}/transaction/pdf/${transactionName}#zoom=43`
      window.open(urlTicekt, '_blank')
      resetTransactionName()
    }
  }, [transactionName, resetTransactionName])

  return (
    <>
      <button className="hover:bg-primary-500 hover:scale-105 hover:text-white transition-colors rounded-sm p-2 text-white duration-300 ease-in-out"
        onClick={() => { fetchInfo(id_transaccion) }}
      >
        <PdfIcon className="text-primary-200" />
      </button>
      <Toaster richColors />
    </>
  )
}
