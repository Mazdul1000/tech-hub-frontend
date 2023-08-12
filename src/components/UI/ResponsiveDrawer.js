import { Button, Drawer, Space } from 'antd';
import React, { useState } from 'react';
import styles from '@/styles/Navbar.module.css'
import {
    DownOutlined,
    MergeCellsOutlined,
    GoogleOutlined,
    GithubOutlined,
    MenuOutlined,
  } from "@ant-design/icons";

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

/* const items = [
    {
      key: "1",
      label: <Link href="/products/processor">CPU / Processor</Link>,
    },
    {
      key: "2",
      label: <Link href="/products/motherboard">Motherboard</Link>,
    },
    {
      key: "3",
      label: <Link href="/products/RAM">RAM</Link>,
    },
    {
      key: "4",
      label: <Link href="/products/power supply">Power Supply Unit (PSU)</Link>,
    },
    {
      key: "5",
      label: <Link href="/products/storage">Storage Device</Link>,
    },
    {
      key: "6",
      label: <Link href="/products/monitor">Monitors</Link>,
    },
    {
      key: "7",
      label: <Link href="/products/others">Others</Link>,
    },
  ]; */



const ResponsiveDrawer = ({setOpen}) => {
    const router = useRouter()
    const { data: session, status } = useSession();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const items = [
        getItem('Categories', 'sub4', <SettingOutlined />, [
          getItem("", '1', <Link href="/products/processor">CPU / Processor</Link>),
          getItem("", '2', <Link href="/products/motherboard">Motherboard</Link>),
          getItem("", '3', <Link href="/products/RAM">RAM</Link>),
          getItem("", '4', <Link href="/products/power supply">Power Supply Unit (PSU)</Link>),
          getItem("", '5', <Link href="/products/storage">Storage Device</Link>),
          getItem("", '6',<Link href="/products/monitor">Monitors</Link>),
          getItem("", '7', <Link href="/products/others">Others</Link>),
        ]),
        getItem('', 'grp', null, [getItem('', '8', <Link 
          href={"/pc-builder"}
        >
       PC Builder
      </Link>),
      status !== "authenticated" ? getItem('Login', '9') : getItem('Logout', '10')], 'group'),
      ];

    const onClick = (e) => {

        if(e.key === "9"){
            setOpen(true)
        }
        
        if(e.key === "10"){
            signOut();
        }
        setDrawerOpen(false)
      };

    const onClose = () => {
        setDrawerOpen(false);
      };
    
      const showDefaultDrawer = () => {
        setDrawerOpen(true);
      };

    return (
        <div className={styles.responsive_drawer}>
       
       <div className={styles}>
       <Button className={styles.responsive_drawer_button} type="primary" onClick={showDefaultDrawer}>
          <MenuOutlined />
        </Button>

       </div>
        <Drawer
          placement="right"
          size={"default"}
          width={"300px"}
          onClose={onClose}
          open={drawerOpen}
        >
        <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
    />
        </Drawer>
      </div>
    );
};

export default ResponsiveDrawer;