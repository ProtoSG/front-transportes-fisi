import { Container } from "../../components";
import { ServiceDetailsCard, TripInfoPanel } from "./components";

export function SearchResult() {
  return (
    <Container>
      <section className="flex flex-col items-center gap-8 md:items-start md:flex-row">
        <TripInfoPanel />
        <section className="w-full gap-7 flex flex-col ">
          <ServiceDetailsCard />
          <ServiceDetailsCard />
        </section>
      </section>
    </Container >
  )
}
