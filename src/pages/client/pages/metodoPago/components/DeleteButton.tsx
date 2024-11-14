import { useEffect, useState } from 'react'
import { TrashIcon } from '../../../../../icons'
import { useDeleteClientPaymentMethod } from '../../../hooks/api/useClientPaymentMethods'
import { usePaymentMethodsStore } from '../../../hooks/usePaymenthMethodsStore'

export const DeleteButton = ({ id }: { id: string}) => {
  const  { deleteCreditCard, idDeleted } = useDeleteClientPaymentMethod()
  const removePaymentMethods = usePaymentMethodsStore((state) => state.removePaymentMethods)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deleteCreditCard(id)
      removePaymentMethods(idDeleted)
    } catch (err) {
      console.log(err)
    } finally {
      setIsDeleting(false)
    }
  }
  useEffect(() => {
    if (idDeleted) removePaymentMethods(idDeleted)
  }, [idDeleted])

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      >
      <TrashIcon
        className="text-red-400 cursor-pointer rounded-sm hover:scale-110 hover:bg-primary-500 transition-all duration-300 ease-in-out"
      />
    </button>
  )
}