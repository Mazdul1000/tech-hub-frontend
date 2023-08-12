import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import React from "react";
import styles from "@/styles/SelectComponent.module.css";
import { transformString } from "@/utils/transformString";
import { MergeCellsOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { selectComponent } from "@/redux/builder/builderSlice";
import { useRouter } from "next/router";

const SelectComponent = ({ category, products }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  return (
    <main className={`${styles.main}`}>
      <h1>Select your {transformString(category)}</h1>

      <Row
        gutter={[
          {
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          },
          {
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          },
        ]}
        justify="center"
        style={{ height: "100%" }}
      >
        {products.map((product) => (
          <Col
            className={`gutter-row`}
            xs={24}
            md={24}
            xl={24}
            key={product.product_name}
          >
            <div>
              <Card
                style={{
                  width: "100%",
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
                      <span>Category:</span> {transformString(product.category)}
                    </p>
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
                      className={styles.add_button}
                      size="large"
                      type="primary"
                      icon={<MergeCellsOutlined />}
                      onClick={() => {
                        dispatch(selectComponent(product));
                        router.push('/pc-builder')
                      }}
                    >
                      Add to builder
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default SelectComponent;

SelectComponent.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

/* export const getStaticPaths = async () => {
  const res = await fetch(`https://techhub-server.vercel.app/products`);
  const data = await res.json();
  const categories = [
    ...new Set(data.products.map((product) => product.category)),
  ];
  const paths = categories.map((category) => ({ params: { category } }));
  return {
    paths,
    fallback: false,
  };
}; */

export const getServerSideProps = async ({ params }) => {
  const category = params.category;
  const res = await fetch(`https://techhub-server.vercel.app/products/${category}`);
  const data = await res.json();

  return {
    props: {
      category,
      products: data.products,
    },
  };
};
