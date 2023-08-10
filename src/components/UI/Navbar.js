import { Button, Dropdown, Menu } from "antd";
import { Layout } from "antd";
import Image from "next/image";
import Link from "next/link";
import { DownOutlined, MergeCellsOutlined } from '@ant-design/icons';
import styles from "@/styles/Home.module.css"
import { useRouter } from "next/router";
const { Header } = Layout;

const Navbar = () => {

  const router = useRouter();
   console.log(router.pathname, router.query)
  const items = [
    {
      key: "1",
      label: (
        <Link
          href="/products/processor"
        >
          CPU / Processor
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          href="/products/motherboard"
        >
          Motherboard
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          href="/products/RAM"
        >
          RAM
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          href="/products/power supply"
        >
          Power Supply Unit (PSU)
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          href="/products/storage"
        >
          Storage Device
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          href="/products/monitor"
        >
          Monitors
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          href="/products/others"
        >
          Others
        </Link>
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
