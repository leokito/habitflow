import { Card, Input, Button, Form } from "antd";
import { useAddNewGroup } from "../../Providers/addGroups/AddGroups";
import { Container } from "./style";
const { TextArea } = Input;
export const AddGroupCard = () => {
  const { AddNewGroup } = useAddNewGroup();

  const [form] = Form.useForm();
  const onFinish = (values) => {
    AddNewGroup(values);
  };

  return (
    <Container>
      <Card title="Crie um Grupo">
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="name">
            <Input placeholder="Nome do grupo" />
          </Form.Item>
          <Form.Item name="category">
            <Input placeholder="Categoria" />
          </Form.Item>
          <Form.Item name="description">
            <TextArea placeholder="Descrição" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
