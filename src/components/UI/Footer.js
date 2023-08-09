import { Layout } from 'antd';

const {  Footer:AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter
        style={{
          textAlign: 'center',
          backgroundColor:'rgb(0,22,40)',
          color: 'white',
          font: 'bold'
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </AntFooter>
    );
};

export default Footer;