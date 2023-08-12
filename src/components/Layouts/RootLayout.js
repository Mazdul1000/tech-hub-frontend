import React from 'react';
import { Layout, theme } from 'antd';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';
import styles from '@/styles/RootLayout.module.css'
const {  Content} = Layout;
const RootLayout = ({children}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
        <Navbar />
      <Content
        className={styles.content_container}
        style={{
          padding: '0 50px',
          minHeight: "100vh",
          marginTop: "64px",
          '@media (max-width: 768px)': {
            padding: '0 !important',
            backgroundColor:"red"
          },
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