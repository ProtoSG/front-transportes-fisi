import { useEffect } from "react";
import { Footer } from "../../components";
import { useDataTripInfo } from "../../hooks/useDataTripInfo";
import FavoriteCities from "./modules/favorite-cities/FavoriteCities";
import Hero from "./modules/hero/Hero";
import Payments from "./modules/payments/Payments";

export default function Home() {
  const {
    removeTipoServicio,
    removeHora,
    removeUbicacion,
    removeCiudadDestino,
    removeFechaSalida,
    removeCiudadOrigen
  } = useDataTripInfo()

  useEffect(() => {
    removeTipoServicio()
    removeHora()
    removeUbicacion()
    removeCiudadDestino()
    removeFechaSalida()
    removeCiudadOrigen()
  }, [])

  return (
    <>
      <Hero />
      <Payments />
      <FavoriteCities />
      <Footer />
    </>
  )
}
