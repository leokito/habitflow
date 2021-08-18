import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Button } from "@material-ui/core";
import HabitForm from "../Addhabit";
import { useState } from "react";
import { AddGroupCard } from "../AddGroup";
import { MyGroupCard } from "../MyGroups";
import MyHabbitCard from "../MyHabbits";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Home = () => {
  const [newHabit, setNewHabit] = useState(false);
  const [newGroup, setNewGroup] = useState(false);
  const [myHabit, setMyHabit] = useState(false);
  const [myGroups, setMyGroups] = useState(false);

  if (
    newHabit === false &&
    newGroup === false &&
    myHabit === false &&
    myGroups === false
  ) {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">User</Menu.Item>
            <Menu.Item key="2">Calendar</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setNewHabit(true);
                    setNewGroup(false);
                    setMyHabit(false);
                    setMyGroups(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(true);
                    setMyGroups(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(true);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item key="7">Group 1</Menu.Item>
                <Menu.Item key="8">Group 2</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
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
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setNewHabit(true);
                          setNewGroup(false);
                          setMyHabit(false);
                          setMyGroups(false);
                        }}
                      >
                        Criar Hábito
                      </Button>
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card title="Meus Hábitos" bordered={false}>
                      <MyHabbitCard />
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card title="Criar Grupos" bordered={false}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setNewHabit(false);
                          setNewGroup(true);
                          setMyHabit(false);
                          setMyGroups(false);
                        }}
                      >
                        Criar Grupo
                      </Button>
                    </Card>
                  </Col>
                  <Col span={6}>
                    <Card title="Gerenciar Grupos" bordered={false}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setNewHabit(false);
                          setNewGroup(false);
                          setMyHabit(false);
                          setMyGroups(true);
                        }}
                      >
                        Meus Grupos
                      </Button>
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
  if (newHabit === true) {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">User</Menu.Item>
            <Menu.Item key="2">Calendar</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setNewHabit(true);
                    setNewGroup(false);
                    setMyHabit(false);
                    setMyGroups(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(true);
                    setMyGroups(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(true);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item key="7">Group 1</Menu.Item>
                <Menu.Item key="8">Group 2</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
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
                      <HabitForm />
                    </Card>
                  </Col>
                  <Col span={6}>
                    {/* <Card title="Meus Hábitos" bordered={false}>
 
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
        </Card> */}
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }

  if (newGroup === true) {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">User</Menu.Item>
            <Menu.Item key="2">Calendar</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setNewGroup(false);
                    setNewHabit(true);
                    setMyHabit(false);
                    setMyGroups(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(true);
                    setMyGroups(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(true);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item key="7">Group 1</Menu.Item>
                <Menu.Item key="8">Group 2</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
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
                  {/* <Col span={6}>
        <Card title="Novo Hábito" bordered={false}>
        
        </Card>
      </Col> */}
                  {/* <Col span={6}>
        <Card title="Meus Hábitos" bordered={false}>
        </Card>
      </Col> */}
                  <Col span={6}>
                    <AddGroupCard />
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }

  if (myHabit === true) {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">User</Menu.Item>
            <Menu.Item key="2">Calendar</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setNewGroup(false);
                    setNewHabit(true);
                    setMyHabit(false);
                    setMyGroups(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(true);
                    setMyGroups(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(true);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item key="7">Group 1</Menu.Item>
                <Menu.Item key="8">Group 2</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
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
                  {/* <Col span={6}>
        <Card title="Novo Hábito" bordered={false}>
        
        </Card>
      </Col> */}
                  {/* <Col span={6}>
        <Card title="Meus Hábitos" bordered={false}>
        </Card>
      </Col> */}
                  <Col span={6}>
                    <MyHabbitCard />
                  </Col>
                  {/* <Col span={10}>
                    <MyGroupCard />
                  </Col>
                  <Col span={8}>
                    <EditGroupCard />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={6}>
                    <AddGoalCard />
                  </Col> */}
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
  if (myGroups === true) {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">User</Menu.Item>
            <Menu.Item key="2">Calendar</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setNewGroup(false);
                    setNewHabit(true);
                    setMyHabit(false);
                    setMyGroups(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(false);
                    setMyGroups(true);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(true);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item key="7">Group 1</Menu.Item>
                <Menu.Item key="8">Group 2</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
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
                  {/* <Col span={6}>
        <Card title="Novo Hábito" bordered={false}>
        
        </Card>
      </Col> */}
                  {/* <Col span={6}>
        <Card title="Meus Hábitos" bordered={false}>
        </Card>
      </Col> */}
                  <Col span={6}>
                    <MyGroupCard />
                  </Col>
                  {/* <Col span={10}>
                    <MyGroupCard />
                  </Col>
                  <Col span={8}>
                    <EditGroupCard />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={6}>
                    <AddGoalCard />
                  </Col> */}
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
};

export default Home;
