import { useMyGoals } from "../../Providers/myGoals/MyGoals";
import { Container } from "./style";

export const GoalsList = () => {
  const { myGoals } = useMyGoals();

  return (
    <Container>
      {myGoals.map((elem) => (
        <div key={elem.id}>
          <p>Meta: {elem.title}</p>
          <p>Dificuldade: {elem.difficulty}</p>
          <p>Alcançado: {elem.how_much_achieved}%</p>
        </div>
      ))}
    </Container>
  );
};
