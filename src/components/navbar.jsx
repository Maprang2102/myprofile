import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;

const items1 = [{
    Name:"Home",
    icon:UserOutlined,
},{
    Name:"Profile",
    icon:LaptopOutlined,
}
].map((items, index) => ({
    key: index + 1,
    icon: React.createElement(items.icon),
    label: items.Name,
  }));

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          width:'100vw',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      
  );
};
export default App;