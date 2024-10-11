import { Container } from "../../components";
import { TripInfoPanel } from "../../components/TripInfoPanel";
import { SeatSelector, TotalPrice } from "./components";

export function SeatSelection() {

  return (
    <Container className="flex-1">
      <section className="flex flex-col items-center gap-8 md:items-start md:flex-row">
        <TripInfoPanel />
        <SeatSelector />
        <TotalPrice />
      </section>
    </Container >
  )
}
