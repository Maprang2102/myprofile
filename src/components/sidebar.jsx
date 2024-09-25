import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const Sidebar = () => {
    const { Header, Content, Footer, Sider } = Layout;
    function getItem(label, key, icon, children) {
      return {
        key,
        icon,
        children,
        label,
      };
    }
    const items = [
      getItem("Option 1", "1", <PieChartOutlined />),
      getItem("Option 2", "2", <DesktopOutlined />),
      getItem("User", "sub1", <UserOutlined />, [
        getItem("Tom", "3"),
        getItem("Bill", "4"),
        getItem("Alex", "5"),
      ]),
      getItem("Team", "sub2", <TeamOutlined />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8"),
      ]),
      getItem("Files", "9", <FileOutlined />),
      getItem("Test", "sub3", <TeamOutlined />, [
        getItem("Test 1", "10"),
        getItem("Test 2", "11"),
      ]),
    ];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      {/* <div className="demo-logo-vertical" /> */}
      <Menu
        theme="dark"
        defaultSelectedKeys={["3"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
