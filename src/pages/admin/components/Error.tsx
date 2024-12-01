import { ErrorIcon } from "../../../icons";

export function Error({ message }: { message: string }) {
  return (
    <div className="border-2 border-red-500 bg-red-400/20 rounded-lg mx-auto min-w-60 px-6 py-3 flex flex-col text-red-500 gap-4">
      <div className="flex gap-2">
        <ErrorIcon />
        <p>Error</p>
      </div>
      <strong className="text-white">{message}</strong>
    </div >
  )
}
