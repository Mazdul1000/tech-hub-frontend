import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";
import styles from '@/styles/ProductDetail.module.css'
import Image from "next/image";

const ProductDetails = ({product, category}) => {
    return (
       <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.image_container}>
                <Image src={product.image_url} height={400} width={400} alt={product.product_name}/>
            </div>
        </div>
        <div className={styles.reviews_section}>
           <h1>Reviews section</h1>
        </div>
       </div>
    );
};

export default ProductDetails;


ProductDetails.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5001/products");
    const data =await res.json();
    const paths = data.products.map((product) => ({
        params :{ slug: [product.category, product._id]}
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const [category, productId] = params.slug;
    const res = await fetch(`http://localhost:5001/product/${productId}`)
    const data = await res.json();

    return {
        props: {
            product: data.product,
            category,
        }
    }
}






