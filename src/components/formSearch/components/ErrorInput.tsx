import { FieldError } from "react-hook-form"

interface ErrorInputProps {
  error?: FieldError
}

export function ErrorInput({ error }: ErrorInputProps) {
  return (
    <>
      {
        error &&
        <div className="absolute -top-8 w-full flex items-center right-0 justify-center z-10 py-1 bg-gray-800 px-2 rounded-sm ">
          <small className="text-yellow-400  font-semibold">{error.message}</small>
        </div>
      }
    </>
  )
}
