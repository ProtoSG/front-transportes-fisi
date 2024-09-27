import { useEffect } from "react";
import { Container } from "../../components";
import { TripInfoPanel } from "../../components/TripInfoPanel";
import { useDataTripInfo } from "../../hooks/useDataTripInfo";
import { ServiceDetailsCard } from "./components";

export function SearchResult() {

  const { removeUbicacion, removeHora, removeTipoServicio } = useDataTripInfo();

  return (
    <Container className="flex-1">
      <section className="flex flex-col items-center gap-8 md:items-start md:flex-row">
        <TripInfoPanel />
        <section className="w-full gap-7 flex flex-col ">
          <ServiceDetailsCard />
          <ServiceDetailsCard />
          <ServiceDetailsCard />
          <ServiceDetailsCard />
        </section>
      </section>
    </Container >
  )
}
