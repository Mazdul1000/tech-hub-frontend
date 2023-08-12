/* eslint-disable react-hooks/exhaustive-deps */
import RootLayout from "@/components/Layouts/RootLayout";
import React, { useEffect, useState } from "react";
import styles from "@/styles/PC-Build.module.css";
import { Button, Card, Rate, Space, Table, message } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFilled } from "@ant-design/icons";
import Image from "next/image";
import { removeComponent } from "@/redux/builder/builderSlice";
import { MergeCellsOutlined } from "@ant-design/icons";
const { Column } = Table;

const PcBuilder = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { components } = useSelector((state) => state.builder);
  const router = useRouter();

  const [totaPrice, setTotalPrice] = useState(0);
  const [areAllSelected, setAreAllSelected] = useState(false);

  

  const data = [
    {
      key: "1",
      component: { name: "CPU / Processor" },
      product: {
        category: "processor",
        data: components.processor,
      },
    },
    {
      key: "2",
      component: { name: "Motherboard" },
      product: {
        category: "motherboard",
        data: components.motherboard,
      },
    },
    {
      key: "3",
      component: { name: "RAM" },
      product: {
        category: "RAM",
        data: components.RAM,
      },
    },
    {
      key: "4",
      component: { name: "Power Supply Unit" },
      product: {
        category: "power supply",
        data: components["power supply"],
      },
    },
    {
      key: "5",
      component: { name: "Storage Device" },
      product: {
        category: "storage",
        data: components.storage,
      },
    },
    {
      key: "6",
      component: { name: "Monitor" },
      product: {
        category: "monitor",
        data: components.monitor,
      },
    },
  ];
  

  useEffect(() => {
    // Calculate whether all components are selected
    const allSelected = data.every((item) => item.product?.data?.product_name);
    setAreAllSelected(allSelected);
  }, [data]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    data.forEach((item) => {
      if (item.product?.data?.product_name) {
        totalPrice += parseInt(item.product.data.price);
      }
    });

    return totalPrice;
  };


  const success = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'Checking the components availability..',
        duration: 3,
      })
      .then(() => message.success('Your PC building request has been accepetd', 2.5))
      .then(() => message.info('We will contact you soon', 3));
  };


  const handleBuild = () => {
   success()
  }


  return (
    <>
    {contextHolder}
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.header}>
         <h3>Builder Your Dream PC</h3> 
       <div className={styles.build_button_container}>
        <p>Total: ৳{calculateTotalPrice()}</p>
       <Button
              className={styles.pc_builder_btn}
              size="large"
              type="primary"
              icon={<MergeCellsOutlined />}
              disabled={!areAllSelected}
              onClick={handleBuild}
            >
              Complete Build
            </Button>
       </div>
        </div>
        <Table dataSource={data}>
          <Column
            title="Component"
            dataIndex="component"
            key="component"
            render={(component) => (
              <div style={{ height: "100px" }}>
                {" "}
                {component.name}
              </div>
            )}
          />

          <Column
            title="Product"
            dataIndex="product"
            key="product"
            width="100%"
            render={({ category, data: product }) => (
              <div className="product-info">
                {product?.product_name ? (
                  <Card
                    style={{
                      width: "100%",
                      border:"none"
                    }}
                  >
                    <div className={`${styles.grid_card}`}>
                      <div className={styles.card_item}>
                        <Image
                          src={product.image_url}
                          alt={product.product_name}
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className={styles.card_item}>
                        <h2>{product.product_name}</h2>
                        <p>
                          <span>Stock status:</span> {product.status}
                        </p>
                        <div>
                          <span>Rating: </span>{" "}
                          <Rate
                            className={`${styles.rating}`}
                            disabled
                            allowHalf
                            defaultValue={product.rating}
                          />
                        </div>
                      </div>
                      <div className={styles.add_button_container}>
                        <p>৳{product.price}</p>
                        <Button
                          className={styles.remove_button}
                          size="large"
                          type="primary"
                          icon={<DeleteFilled />}
                          onClick={() => dispatch(removeComponent(product))}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Button
                    className={styles.select_button}
                    type="Primary"
                    onClick={() =>
                      router.push(`/pc-builder/select/${category}`)
                    }
                  >
                    Select Product
                  </Button>
                )}
              </div>
            )}
          />
        </Table>
      </div>
    </div>
    </>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
