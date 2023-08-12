import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";
import styles from "@/styles/ProductDetail.module.css";
import Image from "next/image";
import { Button, Col, Descriptions, Form, Input, Rate, Row } from "antd";
import { transformString } from "@/utils/transformString";
import { Controller, useForm } from "react-hook-form";

const ProductDetails = ({ product, category }) => {
  const keyFeatures = product?.key_features;
  const { handleSubmit, control, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can replace this with your desired submission logic
  };



  const items = Object.keys(keyFeatures).map((key) => ({
    key: key,
    label: transformString(key),
    styles: { color: "red" },
    children: <p key={transformString}>{keyFeatures[key]}</p>,
  }));

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Row gutter={[0, 40]}>
          <Col sm={{ span: 24 }} md={{ span: 8 }}>
            <div className={styles.image_container}>
              <Image
                src={product.image_url}
                height={400}
                width={300}
                alt={product.product_name}
              />
            </div>
          </Col>
          <Col
            className={styles.product_info}
            sm={{ span: 24 }}
            md={{ span: 16 }}
          >
            <h2>{product.product_name}</h2>
            <p>Price: {product.price}</p>
            <p>Category: {transformString(product.category)}</p>
            <p>Stock Status: {product.status}</p>
            <div>
              {" "}
              <Rate
                className={`${styles.rating}`}
                disabled
                allowHalf
                defaultValue={product.rating}
              />
            </div>
            <div>
              <p>{product.description}</p>
            </div>
          </Col>
          <Col sm={{ span: 24 }}>
            <Descriptions
              className={styles.key_features}
              title="Key Features"
              size="medium"
              bordered
              column={1}
              items={items}
            />
          </Col>
        </Row>
      </div>
      <div className={styles.review_section}>
        <h3 style={{}}>Reviews :</h3>
        <Row gutter={[0, 40]} style={{ padding: "30px" }}>
          {
            product.reviews.map((review, index) => <Col key={index} className={`gutter-row ${styles.review_card}`} span={24}>
            <h3>{review.username}</h3>
            <p>{review.message}</p>
            <Rate
              className={`${styles.rating}`}
              allowHalf
              disabled
              defaultValue={review.rating}
            />
          </Col>)
          }
        </Row>

        <h3>Write a Review :</h3>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className={styles.label}>User Name</label>
              <Controller
                name="userName"
                control={control}
                defaultValue=""
                rules={{ required: 'User name is required' }}
                render={({ field, fieldState }) => (
                  <div>
                    <input {...field} className={styles.inputField} placeholder="Enter your user name" />
                    {fieldState.error && <p>{fieldState.error.message}</p>}
                  </div>
                )}
              />
            </div>
            <div>
              <label className={styles.label}>Review</label>
              <Controller
                name="review"
                control={control}
                defaultValue=""
                rules={{ required: 'Review is required' }}
                render={({ field, fieldState }) => (
                  <div>
                    <textarea {...field} className={styles.textareaField} placeholder="Write your review here" />
                    {fieldState.error && <p>{fieldState.error.message}</p>}
                  </div>
                )}
              />
            </div>
            <div>
              <label className={styles.label}>Rating</label>
              <Controller
                name="rating"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <div className={styles.rating}>
                    <Rate {...field} allowHalf defaultValue={product.rating} />
                  </div>
                )}
              />
            </div>
            <button type="submit" disabled={formState.isSubmitting} className={styles.submit_btn}>
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://techhub-server.vercel.app/products");
  const data = await res.json();
  const paths = data.products.map((product) => ({
    params: { slug: [product.category, product._id] },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const [category, productId] = params.slug;
  const res = await fetch(`https://techhub-server.vercel.app/product/${productId}`);
  const data = await res.json();

  return {
    props: {
      product: data.product,
      category,
    },
    revalidate: 30,
  };
};
