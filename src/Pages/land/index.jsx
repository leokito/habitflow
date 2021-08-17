import { useHistory } from "react-router-dom";
import { Titulo, Container, Paragrafo, Button, Box } from "./style";

const Land = () => {
  const history = useHistory();

  return (
    <Container>
      <Titulo>Habitflow</Titulo>
      <Box>
        <Paragrafo>
          “Para que um hábito continue mudando, as pessoas precisam acreditar
          que a mudança é possível. E na maior parte das vezes, só surge com a
          ajuda de um grupo.”
        </Paragrafo>

        <Button onClick={() => history.push("/cadastro")}>Cadastrar</Button>
        <Button onClick={() => history.push("/login")}>Entrar</Button>
      </Box>
    </Container>
  );
};

export default Land;
