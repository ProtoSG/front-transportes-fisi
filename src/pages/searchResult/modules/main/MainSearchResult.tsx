import { Container, ProgressSteps } from "../../../../components";
import { ServiceDetailsCard, TripInfoPanel } from "./components";

export default function MainSearchResult() {
  return (
    <Container className="flex-1">
      <ProgressSteps currentStep={1} />
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
