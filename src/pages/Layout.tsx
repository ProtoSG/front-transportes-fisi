import { Outlet, useLocation } from "react-router-dom";
import { Container, ContainerBgHeader, Footer, FormSearch, Header, ProgressSteps } from "../components";
import { useEffect, useState } from "react";

export function Layaout() {
  const [active, setActive] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/search-results") setActive(true)
    else setActive(false)
  }, [pathname])


  return (
    <>
      <ContainerBgHeader className="bg-bottom h-72">
        <Container className={`text-primary-50 h-full pt-4 ${!active ? "justify-center pb-10" : "justify-between"} `}>
          <Header />
          {
            active && <FormSearch />
          }
        </Container>
      </ContainerBgHeader >
      <Container>
        <ProgressSteps />
      </Container>
      <Outlet />
      <Footer />
    </>
  )
}
