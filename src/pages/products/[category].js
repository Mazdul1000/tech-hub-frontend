import RootLayout from '@/components/Layouts/RootLayout';
import Image from 'next/image';

const CategoryPage = ({ category, products }) => {
    return (
        <main>
            <h1>Hello world from product category: {category}</h1>
            <ul>
                {products.map(product => (
                    <li key={product.product_name}>
                        <h2>{product.product_name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <Image src={product.image_url} alt={product.product_name} width={300} height={450}/>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page){

    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }
export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:5001/products`); 
    const data = await res.json();
    const categories = [...new Set(data.products.map(product => product.category))];
    const paths = categories.map(category => ({ params: { category } }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    console.log(params, "here")
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

