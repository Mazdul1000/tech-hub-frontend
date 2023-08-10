import RootLayout from "@/components/Layouts/RootLayout";
import { Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import styles from "@/styles/Category.module.css";
import { transformString } from "@/utils/transformString";

const CategoryPage = ({ category, products }) => {
  return (
    <main className={`${styles.main}`}>
      <h1 style={{padding:"20px 20px"}}>Product category: {transformString(category)}</h1>

      <Row
        gutter={[{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        },{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }]}
        justify= "center"
        style={{height:"100%",}}
      >
        {products.map((product) => (
          <Col
            className={`gutter-row ${styles.grid_card}`}
            xs={24}
            md={12}
            xl={8}
            key={product.product_name}
          >
            <div>
              <Card
                hoverable
                style={{
                  width: 350,
                }}
                cover={
                  <Image
                    src={product.image_url}
                    alt={product.product_name}
                    width={400}
                    height={300}
                  />
                }
              >
                <div className={`${styles.grid_card}`}>
                  <h2>{product.product_name}</h2>
                  <p>
                    <span>Category:</span> {product.category}
                  </p>
                  <p>
                    <span>Price:</span> {product.price}
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
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5001/products`);
  const data = await res.json();
  const categories = [
    ...new Set(data.products.map((product) => product.category)),
  ];
  const paths = categories.map((category) => ({ params: { category } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params, "here");
  const category = params.category; // Extract the category parameter
  const res = await fetch(`http://localhost:5001/products/${category}`); // Update the API endpoint URL
  const data = await res.json();

  return {
    props: {
      category,
      products: data.products,
    },
  };
};
