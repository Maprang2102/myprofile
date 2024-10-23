import React, { useState } from "react";
import { Button, Col, Flex, Layout } from "antd";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import CustomHeader from "./components/Header";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

import { getFirestore,collection,getDocs } from "firebase/firestore";
import db from "./configDatabase";


getCities(db);
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'users');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log("test111",cityList);
  return cityList;
}

const { Sider, Header, Content } = Layout;
const App = () => {
  const [collapsed, setcollapsed] = useState(false);
  return (
    <Layout>
      {/* <Sider
        // theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
        breakpoint="lg"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
          {collapsed ? setcollapsed(true): setcollapsed(false)}
          
        }}
      >
        <Sidebar />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setcollapsed(!collapsed)}
          className="triger-btn"
        ></Button>
      </Sider> */}
      <Layout>
        {/* <Header className="header">
          <CustomHeader/>
        </Header> */}
            <MainContent/>
        {/* <Content className="content">
          <Col gap="large" flex="auto">
             <SideContent /> 
          </Col>
        </Content> */}
      </Layout>
    </Layout>
  );
};

export default App;
