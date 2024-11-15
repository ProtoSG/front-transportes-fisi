import { PdfIcon } from "../../../../../icons"

export const PrintButton = ({ id_pasaje }: { id_pasaje: string }) => {
  return (
    <button className="hover:bg-primary-500 hover:scale-105 hover:text-white transition-colors rounded-sm p-2 text-white duration-300 ease-in-out"
      onClick={() => { console.log(id_pasaje) }}
    >
      <PdfIcon className="text-primary-200" />
    </button>
  )
}