import { Card, Input, Button, Form } from "antd";
import { useEditGroup } from "../../Providers/editGroup/EditGroup";
import { Container } from "./style";
const { TextArea } = Input;

export const EditGroupCard = () => {
  const { HandleEditGroup } = useEditGroup();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    HandleEditGroup(values);
  };

  return (
    <Container>
      <Card title="Editar Grupo">
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
            Salvar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
