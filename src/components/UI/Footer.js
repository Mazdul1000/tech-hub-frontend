import { Layout } from 'antd';

const {  Footer:AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter
        style={{
          textAlign: 'center',
          backgroundColor:'rgb(59,43,169)',
          color: 'white',
          fontFamily: "Oswald, sans-serif",

        }}
      >
        Tech-Hub ©2023 Crafted by Mazedul Hasan
      </AntFooter>
    );
};

export default Footer;