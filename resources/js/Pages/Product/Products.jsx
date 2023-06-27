import Authenticated from "@/Layouts/AuthenticatedLayout";
import ProductsLayout from "@/Layouts/ProductsLayout";
import ProductCard from "@/Components/ProductCard/ProductCard.jsx";

export default function Products(props){
    const products = JSON.parse(props.products)
    return (
        <ProductsLayout>
            <div className="flex justify-between flex-wrap gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} props={product}/>
                ))}
            </div>
        </ProductsLayout>
    )
}
