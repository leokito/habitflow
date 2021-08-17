import { Card, Input, Button, Form, Select } from "antd";
import { useAddNewGoal } from "../../Providers/addGoal/AddGoal";
import { Container } from "./style";

export const AddGoalCard = () => {
  const { AddNewGoal } = useAddNewGoal();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    AddNewGoal(values);
  };

  return (
    <Container>
      <Card title="Crie uma meta">
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="title">
            <Input placeholder="Nome da meta" />
          </Form.Item>
          <Form.Item name="difficulty">
            <Select placeholder="Dificuldade">
              <Select.Option value="Fácil">Fácil</Select.Option>
              <Select.Option value="Médio">Médio</Select.Option>
              <Select.Option value="Difícil">Difícil</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="how_much_achieved">
            <Input placeholder="Quanto você já atingiu dessa meta de 0 a 100" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
