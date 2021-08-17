import { AddGroupCard } from "../../Components/AddGroup";
import { FindGroupCard } from "../../Components/FindGroup";
import { MyGroupCard } from "../../Components/MyGroups";
import { Layout } from "antd";
import { EditGroupCard } from "../../Components/EditGroup";

const { Content } = Layout;

export const GroupsPage = () => {
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <EditGroupCard />
        <AddGroupCard />
        <FindGroupCard />
        <MyGroupCard />
      </Content>
    </Layout>
  );
};
