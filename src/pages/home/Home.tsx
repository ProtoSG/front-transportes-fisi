import { Footer } from "../../components";
import FavoriteCities from "./modules/favorite-cities/FavoriteCities";
import Hero from "./modules/hero/Hero";
import Payments from "./modules/payments/Payments";

export function Home() {
  return (
    <>
      <Hero />
      <Payments />
      <FavoriteCities />
      <Footer />
    </>
  )
}
