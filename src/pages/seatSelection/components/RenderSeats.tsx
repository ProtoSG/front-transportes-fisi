import { Seat } from "../models/SeatModel";
import { SeatNotSelected } from "./SeatNotSelected";
import { SeatSelected } from "./SeatSelected";

export function RenderSeats({ asientos }: { asientos: Seat[] }) {
  return asientos.map((asiento) => (
    asiento.ocupado ? (
      <SeatSelected key={asiento.id_asiento} />
    ) : (
      <SeatNotSelected
        key={asiento.id_asiento}
        seat={asiento}
      />
    )
  ));
}

