import { ArrowLargeIcon, CalendarIcon } from "@icons";

export function TripInfoPanel() {
  return (
    <div className="w-72 bg-primary-100 rounded-xl px-8 py-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl text-primary-900">Lima</p>
        <ArrowLargeIcon className="text-primary-500 size-8" />
        <p className="font-bold text-xl text-primary-900">Cusco</p>
      </div>
      <div className="flex gap-2 items-center">
        <CalendarIcon className="text-primary-500" />
        <p className="text-xs text-pretty">Jueves 19 se Septiembre</p>
      </div>
    </div>
  )
}
