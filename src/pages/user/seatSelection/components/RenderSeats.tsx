import { Asiento } from "../models/asiento.model";
import { SeatNotSelected } from "./SeatNotSelected";
import { SeatSelected } from "./SeatSelected";

export function RenderSeats({ asientos }: { asientos: Asiento[] }) {
  return asientos.map((asiento) => (
    asiento.disponibilidad === "Disponible" ? (
      <SeatSelected key={asiento.idAsiento} />
    ) : (
      <SeatNotSelected
        key={asiento.idAsiento}
        seat={asiento}
      />
    )
  ));
}

