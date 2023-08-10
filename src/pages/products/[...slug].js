import { useRouter } from "next/router";

const ProductCategory = () => {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug || !Array.isArray(slug)) {
        // Handle the case when slug is not an array or is not present
        return (
            <div>
                <h1>Invalid slug format</h1>
            </div>
        );
    }

    const [category, productId] = slug;

    return (
        <div>
            <h1>This page is from product category. Product id: {productId}</h1>
        </div>
    );
};

export default ProductCategory;






