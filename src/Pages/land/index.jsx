import { Titulo, Body, Paragrafo, Button } from "./style";

const Land = () => {
  return (
    <Body>
        <Titulo>Habitflow</Titulo>
        <div>
          <Paragrafo>
            “Para que um hábito continue mudando, as pessoas precisam acreditar
            que a mudança é possível. E na maior parte das vezes, só surge com a
            ajuda de um grupo.”
          </Paragrafo>

          <Button>Cadastrar</Button>
          <Button>Entrar</Button>
        </div>
      </Body>
  );
};

export default Land;
