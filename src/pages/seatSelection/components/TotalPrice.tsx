export function TotalPrice() {
  return (
    <div className="bg-primary-100 py-3 px-6 rounded-lg text-nowrap">
      <p className="text-xs text-center text-primary-700 italic">Precio Total</p>
      <div className="flex items-center justify-center text-primary-500 font-bold">
        <small>s/</small>
        <span className="text-3xl">0.00</span>
      </div>
    </div>
  )
}
