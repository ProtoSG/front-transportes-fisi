import { toast, Toaster } from 'sonner'
import { PdfIcon } from '../../../../../icons'
import { useTicket } from '../../../hooks/api/useTicket'
import { useEffect } from 'react'
const API_URL = import.meta.env.VITE_BACKEND_URL

export const PrintButton = ({ id_pasaje }: { id_pasaje: string }) => {
  const { fetchInfo, resetTicketName, error, ticketName } = useTicket()

  useEffect(() => {
    if (error) {
      toast.error(error.message)
    }
  }, [error])

  useEffect(() => {
    if (ticketName) {
      toast.success(`Boleto generado con éxito`)
      const urlTicekt = `${API_URL}/ticket/pdf/${ticketName}#zoom=43`
      window.open(urlTicekt, '_blank')
      resetTicketName()
    }
  }, [ticketName, resetTicketName])

  return (
    <>
      <button className="hover:bg-primary-500 hover:scale-105 hover:text-white transition-colors rounded-sm p-2 text-white duration-300 ease-in-out"
        onClick={() => { fetchInfo(id_pasaje) }}
      >
        <PdfIcon className="text-primary-200" />
      </button>
      <Toaster richColors />
    </>
  )
}
