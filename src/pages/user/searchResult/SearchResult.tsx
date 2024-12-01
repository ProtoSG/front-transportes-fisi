import { useLocation } from "react-router-dom";
import { ServiceDetailsCard } from "./components";
import { useSearchViajes } from "./hooks/useSearchViajes";
import { Container, DialogLoginClient } from "../../../components";
import { TripInfoPanel } from "../../../components/TripInfoPanel";

export function SearchResult() {

  const { search } = useLocation()
  const params = new URLSearchParams(search)

  const origen = params.get("origen") ?? ""
  const destino = params.get("destino") ?? ""
  const fecha = params.get("fecha") ?? ""

  const { viajes, loading, error } = useSearchViajes({ origen, destino, fecha })

  if (loading) return (<span>Cargando</span>)
  if (error) return <span>Error</span>

  return (
    <Container className="flex-1">
      <section className="flex flex-col items-center gap-8 md:items-start md:flex-row">
        <TripInfoPanel />
        <section className="w-full gap-7 flex flex-col ">
          {viajes.length > 0 && viajes.map((viaje) => (
            <ServiceDetailsCard key={viaje.idViaje} viaje={viaje} />
          ))}
        </section>
      </section>
      <DialogLoginClient />
    </Container >
  )
}
