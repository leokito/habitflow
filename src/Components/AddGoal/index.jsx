import { Card, Input, Button, Form, InputNumber, Select } from "antd";
import { Option } from "antd/lib/mentions";
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
              <Option value="Fácil">Fácil</Option>
              <Option value="Médio">Médio</Option>
              <Option value="Difícil">Difícil</Option>
            </Select>
          </Form.Item>
          <Form.Item name="how_much_achieved">
            <InputNumber
              min={0}
              max={10}
              defaultValue={0}
              placeholder="Quanto você já atingiu dessa meta de 0 a 100"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
