import { useState } from "react";
import { Button, ConfigProvider, Input, Space, theme } from "antd";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Contents from "./components/content";
import { Breadcrumb, Layout, Menu } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ConfigProvider
        theme={{
          // 1. Use dark algorithm
          algorithm: theme.compactAlgorithm,

          // 2. Combine dark algorithm and compact algorithm
          // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
        }}
      >
          <Layout style={{ minHeight:'100vh' }}>
            <Navbar />
            <Layout>
              <Sidebar />
              <Contents />
            </Layout>
          </Layout>
          
      </ConfigProvider>
    </>
  );
}

export default App;
