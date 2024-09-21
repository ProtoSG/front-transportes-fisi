import { Container, ContainerBgHeader, FormSearch, Header } from "../../../../components";

export default function HeaderSearchResult() {
  return (
    <ContainerBgHeader className="bg-bottom">
      <Container className="text-primary-50 gap-28 pt-4">
        <Header />
        <FormSearch />
      </Container>
    </ContainerBgHeader>
  )
}
