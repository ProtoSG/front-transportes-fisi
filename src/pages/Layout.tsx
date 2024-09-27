import { Outlet } from "react-router-dom";
import { Container, ContainerBgHeader, Footer, FormSearch, Header, ProgressSteps } from "../components";

export function Layaout() {
  return (
    <>
      <ContainerBgHeader className="bg-bottom h-72">
        <Container className="text-primary-50 h-full justify-between pt-4">
          <Header />
          <FormSearch />
        </Container>
      </ContainerBgHeader>
      <Container>
        <ProgressSteps />
      </Container>
      <Outlet />
      <Footer />
    </>
  )
}
