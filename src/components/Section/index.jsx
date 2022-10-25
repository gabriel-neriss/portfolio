import { Container } from "./styles";


export function Section ({tilte, children}) {

  return (

    <Container>
      <h2>{tilte}</h2>
      {children}
    </Container>


  )

}