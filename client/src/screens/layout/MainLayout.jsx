import React from "react";
import { Layout } from "antd";
import TopNav from "../topNav/TopNav";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor:"white" }}><TopNav /></Header>
      <Content style={{ height: "85vh" }}>i am content</Content>
      <Footer style={{ backgroundColor: "black" }}>I am footer</Footer>
    </Layout>
  );
};

export default MainLayout;
