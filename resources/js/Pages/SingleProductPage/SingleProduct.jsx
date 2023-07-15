import ProductsLayout from "@/Layouts/ProductsLayout";
import ProductCard from "@/Components/ProductCard/ProductCard.jsx";
import ImagesSection from "@/Pages/SingleProductPage/Partials/ImagesSection.jsx";
import ProductInfo from "@/Pages/SingleProductPage/Partials/ProductInfo.jsx";


export default function SingleProduct(props){
    const product = props.productInfo

    return (
        <ProductsLayout>
            <div className="flex flex-col gap-[60px] justify-between items-center md:flex-row">
                <ImagesSection images={props.productImages} />
                <ProductInfo product={product}/>
            </div>
        </ProductsLayout>
    )
}
