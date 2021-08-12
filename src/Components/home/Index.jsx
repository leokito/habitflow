import { Layout, Menu} from 'antd';
import { UserOutlined, LaptopOutlined} from '@ant-design/icons';
import { Card, Col, Row } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Home = () =>{
   return(
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">User</Menu.Item>
        <Menu.Item key="2">Calendar</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
            <Menu.Item key="1">Novo Hábito</Menu.Item>
            <Menu.Item key="2">Meus Hábitos</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
            <Menu.Item key="5">Novo Grupo</Menu.Item>
            <Menu.Item key="6">Meus Grupos</Menu.Item>
            <Menu.Item key="7">Group 1</Menu.Item>
            <Menu.Item key="8">Group 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={6}>
        <Card title="Novo Hábito" bordered={false}>
          Lugar do "botão" do criar hábito
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Meus Hábitos" bordered={false}>
        Lugar do "botão" do ver hábito
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Criar Grupos" bordered={false}>
        Lugar do "botão" do criar Grupos
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Gerenciar Grupos" bordered={false}>
        Lugar do "botão" do gerenciar grupos
        </Card>
      </Col>
    </Row>
  </div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
   );

}
  
export default Home