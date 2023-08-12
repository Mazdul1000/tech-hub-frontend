import { Button, Divider, Dropdown, Menu, Modal } from "antd";
import { Layout } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  DownOutlined,
  MergeCellsOutlined,
  GoogleOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn, signOut, useSession } from "next-auth/react";
const { Header } = Layout;

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const items = [
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
  ];

  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const onSubmit = (data) => {
    console.log(data);
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    const { pathname, query } = router;
    delete query.loginModalOpen;
    delete query.callbackUrl;
    router.replace({ pathname, query });
  };

  const handleGooleLogin = async() => {
    signIn("google", {
      callbackUrl: router.query.callbackUrl
    })
    setOpen(false)

  };

  const handleGithubLogin = () => {
    signIn("github", {
      callbackUrl: router.query.callbackUrl
    });
    setOpen(false);
  };

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        zIndex: 500,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="brand-logo"
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "-50px",
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
      >
        <Image
          src={"/logo/logo-2.png"}
          height={150}
          width={250}
          style={{ objectFit: "contain" }}
          alt="brand logo"
        />
      </div>
      <Menu
        className={styles.menu_container}
        mode="horizontal"
        defaultSelectedKeys={["2"]}
      >
        <div className={styles.menu_1}>
          <Dropdown
            overlayStyle={{
              color: "white",
              borderRadius: "5px",
              width: "300px",
              zIndex: 1000,
            }}
            menu={{
              items,
            }}
            placement="top"
            arrow
          >
            <Button
              className={styles.nav_btn}
              type="primary"
              icon={<DownOutlined />}
              size={"large"}
            >
              Catagories
            </Button>
          </Dropdown>
          <Link href={"/pc-builder"}>
            <Button
              className={styles.pc_builder_btn}
              type="primary"
              size="large"
              icon={<MergeCellsOutlined />}
            >
              PC Builder
            </Button>
          </Link>
        </div>
        <div className={styles.menu_2}>
          {status !== "authenticated" && (
            <Button
              className={styles.nav_btn}
              type="primary"
              size="large"
              onClick={showModal}
            >
              Login
            </Button>
          )}
          {status === "authenticated" && (
            <Button
              className={styles.nav_btn}
              type="primary"
              size="large"
              onClick={() => signOut()}
            >
              Logout
            </Button>
          )}
        </div>
      </Menu>

      <Modal
        className={styles.login_modal}
        open={open || router.query.loginModalOpen === "true"}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
        title={
          <div className={styles.login_modal_logo}>
            <Image
              src={"/logo/logo-2.png"}
              alt="brand logo"
              width={200}
              height={80}
            />
            <h2>Login</h2>
          </div>
        }
      >
        <div>
          <div className={styles.form}>
            <div className={styles.social_icons}>
              <GoogleOutlined onClick={handleGooleLogin} />
              <GithubOutlined onClick={handleGithubLogin} />
            </div>
            <Divider>OR</Divider>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.input_box}>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className={styles.input_box}>
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
              <button className={styles.submit_btn} type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </Header>
  );
};

export default Navbar;
