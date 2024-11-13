import { ReactNode } from "react";
import { CheckIcon } from "../../../../icons";

interface PaymentMethodProps {
  name: string;
  icon: ReactNode;
  active?: boolean
}

export function PaymentMethod({ name, icon, active }: PaymentMethodProps) {
  return (
    <div className={`border-2 w-48 rounded flex justify-between px-3 py-4 shadow-xl ${active ? "border-primary-400" : ""}`}>
      <div className="flex flex-col gap-2">
        <span className="text-primary-400">{icon}</span>
        <span>{name}</span>
      </div>
      {active && <span className="bg-primary-400 size-7 flex items-center justify-center rounded-full text-white"><CheckIcon /></span>}
    </div>
  )
}
