import ProductsLayout from "@/Layouts/ProductsLayout";
import ProductCard from "@/Components/ProductCard/ProductCard.jsx";


export default function SingleProduct(props){
    const product = props.productInfo

    return (
        <ProductsLayout>
            <h1>{product.name}</h1>
        </ProductsLayout>
    )
}
