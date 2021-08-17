import { Card, Input, Button, Divider } from "antd";
import { useState } from "react";
import { useGroupList } from "../../Providers/findGroups/FindGroups";
import { Container } from "./style";

export const FindGroupCard = () => {
  const { groupsList, Subscribe } = useGroupList();

  const [userSearch, setUserSearch] = useState([]);
  const [list, setList] = useState([]);

  const handleSearch = (data) => {
    const search = groupsList.filter((elem) => elem.name === data);
    setList(search);
  };

  return (
    <Container>
      <Card title="Participe de um Grupo">
        <Input
          placeholder="Digite o nome do grupo"
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <Button type="primary" onClick={() => handleSearch(userSearch)}>
          Procurar
        </Button>
        {list.map((elem) => (
          <div className="join" key={elem.id}>
            <Divider />
            <p>Nome: {elem.name}</p>
            <p>Categoria: {elem.category}</p>
            <p>Descrição: {elem.description}</p>
            <Button type="primary" onClick={() => Subscribe(elem.id)}>
              Participar
            </Button>
            <Divider />
          </div>
        ))}
      </Card>
    </Container>
  );
};
