export function SeatNotSelected() {
  return (
    <div className="w-10 h-9 text-primary-700 rounded bg-primary-50 drop-shadow-lg flex flex-col items-center justify-center hover:cursor-pointer group">
      <small className="">01</small>
      <hr className="border-primary-800 w-full" />
      <div className="flex items-center w-full justify-center rounded-b gap-1 group-hover:bg-primary-500 group-hover:text-primary-50 transition-colors">
        <small>S/</small>
        <span className="font-bold">60</span>
      </div>
    </div>
  )
}
