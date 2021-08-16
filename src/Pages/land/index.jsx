import { useHistory } from "react-router-dom";
import { Titulo, Body, Paragrafo, Button, Box } from "./style";

const Land = () => {

  const history = useHistory()

  return (
    <Body>
      <Titulo>Habitflow</Titulo>
      <Box>
        <Paragrafo>
          “Para que um hábito continue mudando, as pessoas precisam acreditar
          que a mudança é possível. E na maior parte das vezes, só surge com a
          ajuda de um grupo.”
        </Paragrafo>

        <Button onClick={()=> history.push('/cadastro')}>Cadastrar</Button>
        <Button onClick={()=> history.push('/login')}>Entrar</Button>
      </Box>
    </Body>
  );
};

export default Land;
