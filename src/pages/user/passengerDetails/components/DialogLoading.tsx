export function DialogLoading() {
  return (
    <dialog
      id="dialog-loading"
      className="m-auto  gap-12 px-12 drop-shadow-3xl py-12 rounded-lg focus:outline-none backdrop:backdrop-blur-xl"
    >
      <div className="flex flex-col gap-12">
        Cargando...
      </div>
    </dialog>
  )
}
