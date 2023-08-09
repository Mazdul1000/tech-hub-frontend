import React from 'react';
import { Layout, theme } from 'antd';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';
const {  Content} = Layout;
const RootLayout = ({children}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
        <Navbar />
      <Content
        style={{
          padding: '0 50px',
          minHeight: "calc(100vh - 144.5px)"
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
export default RootLayout;