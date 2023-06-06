import Authenticated from "@/Layouts/AuthenticatedLayout";
import ProductsLayout from "@/Layouts/ProductsLayout";
import ProductCard from "@/Components/ProductCard/ProductCard.jsx";


export default function Products(){
    return (
        <ProductsLayout>
            <div className="flex justify-between">
                <ProductCard />
                <ProductCard/>
                <ProductCard/>

            </div>
        </ProductsLayout>
    )
}
