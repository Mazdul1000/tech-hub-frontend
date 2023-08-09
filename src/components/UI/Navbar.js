import { Button, Dropdown, Menu } from "antd";
import { Layout } from "antd";
import Image from "next/image";
import Link from "next/link";
import { DownOutlined, MergeCellsOutlined } from '@ant-design/icons';
import styles from "@/styles/Home.module.css"

const { Header } = Layout;

import React from "react";

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        height: "80px",
      }}
    >
      <div
        className="-logo"
        style={{ display: "flex", alignItems: "center",marginLeft:"-50px" }}
      >
        <Image
          src={"/logo/logo-2.png"}
          height={150}
          width={250}
          style={{ objectFit: "contain" }}
          alt= "brand logo"
        />
      </div>
      <Menu className={styles.menu_container} mode="horizontal" defaultSelectedKeys={["2"]} >
       <div className={styles.menu_1}>
       <Dropdown
          overlayStyle={{ color: "white", borderRadius:"5px", width:"300px" }}
          menu={{
            items,
          }}
          placement="bottom"
          arrow
        >
      <Button className={styles.nav_btn} type="primary" icon={<DownOutlined />} size={"large"}>
            Catagories
          </Button>
        </Dropdown>
        <Link href={"/pc-builder"}>
        <Button className={styles.pc_builder_btn} type="primary" size="large" icon={<MergeCellsOutlined />}>PC Builder</Button>
        </Link>
       </div>
       <div className={styles.menu_2}>
       <Link href={"/pc-builder"}>
        <Button className={styles.nav_btn} type="primary" size="large">Login</Button>
        </Link>
        <Link href={"/pc-builder"}>
        <Button className={styles.nav_btn} type="primary" size="large">Logout</Button>
        </Link>
       </div>
      </Menu>
    </Header>
  );
};

export default Navbar;
