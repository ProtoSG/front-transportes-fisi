import { Footer } from "../../components";
import HeaderSearchResult from "./modules/header/HeaderSearchResult";
import MainSearchResult from "./modules/main/MainSearchResult";

export function SearchResult() {
  return (
    <>
      <HeaderSearchResult />
      <MainSearchResult />
      <Footer />
    </>
  )
}
