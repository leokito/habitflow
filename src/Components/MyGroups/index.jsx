import { Collapse, Card, Tooltip, Button } from "antd";
import { useMyGroup } from "../../Providers/myGroups/MyGroups";
import { EditOutlined } from "@ant-design/icons";
import { Container } from "./style";
import { useEditGroup } from "../../Providers/editGroup/EditGroup";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

export const MyGroupCard = () => {
  const { myList } = useMyGroup();
  const { setEditGroup } = useEditGroup();

  const handleClick = (id) => {
    setEditGroup((prevState) => [...prevState, id]);
  };

  return (
    <Container>
      <Card title="Meus Grupos">
        <Collapse accordion onChange={callback}>
          {myList.map((elem) => (
            <Panel header={elem.name} key={elem.id}>
              <p>Categoria: {elem.category}</p>
              <p>Descrição: {elem.description}</p>
              <Tooltip title="Editar">
                <Button
                  shape="circle"
                  onClick={() => handleClick(elem.id)}
                  icon={<EditOutlined />}
                  size="large"
                />
              </Tooltip>
            </Panel>
          ))}
        </Collapse>
      </Card>
    </Container>
  );
};
