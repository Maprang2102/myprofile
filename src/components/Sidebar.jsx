import { CarryOutOutlined, LogoutOutlined, OrderedListOutlined, ProfileOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Flex, Menu, Button, Layout } from "antd";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { PiFlowerLotusBold } from "react-icons/pi";

const { Sider, Header, Content } = Layout;
const Sidebar = () => {
  const [collapsed, setcollapsed] = useState(false);
  return (
    <>
      <Sider
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
      <Flex align="center" justify="center">
        <div className="logo">
          <PiFlowerLotusBold />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          { 
            key: "1", 
            icon: <UserOutlined />, 
            label: (<a href="/">Blog</a>) ,
          },
          { 
            key: "2", 
            icon: <CarryOutOutlined />, 
            label: (<a href="TestPage">My order</a>) ,
          },
          { 
            key: "3", 
            icon: <OrderedListOutlined />, 
            label: "ToDo" ,
            link:'/TestPage'
          },
          { 
            key: "4", 
            icon: <ProfileOutlined />, 
            label: "Profile" ,
            link:'/TestPage'
          },
          { 
            key: "5", 
            icon: <SettingOutlined />, 
            label: "Setting" ,
            link:'/TestPage'
          },
          { 
            key: "6", 
            icon: <LogoutOutlined />, 
            label: "Logout",
            link:'/TestPage' 
          },
        ]}
      ></Menu>
      <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setcollapsed(!collapsed)}
          className="triger-btn"
        ></Button>
      </Sider>
    </>
  );
};

export default Sidebar;
