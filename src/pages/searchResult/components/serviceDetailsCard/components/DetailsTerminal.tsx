type DetailsTerminalProps = {
  type: "embarque" | "desembarque",
  hour: string,
  location: string
}

export function DetailsTerminal({ type, hour, location }: DetailsTerminalProps) {
  return (
    <div className="flex flex-col items-center justify-center text-primary-800 gap-2" >
      <small className="italic">{type}</small>
      <span className="text-xl font-bold text-primary-500">{hour}</span>
      <p className="text-xs text-pretty text-center">{location}</p>
    </div>
  )
}
