import { Collapse, Card } from "antd";
import { useMyGroup } from "../../Providers/myGroups/MyGroups";
import { Container } from "./style";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

export const MyGroupCard = () => {
  const { myList } = useMyGroup();

  return (
    <Container>
      <Card title="Meus Grupos">
        <Collapse accordion onChange={callback}>
          {myList.map((elem) => (
            <Panel header={elem.name} key={elem.id}>
              <p>Categoria: {elem.category}</p>
              <p>Descrição: {elem.description}</p>
            </Panel>
          ))}
        </Collapse>
      </Card>
    </Container>
  );
};
