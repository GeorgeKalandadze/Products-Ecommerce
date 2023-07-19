import ProductsLayout from "@/Layouts/ProductsLayout";
import ProductCard from "@/Components/ProductCard/ProductCard.jsx";
import ImagesSection from "@/Pages/SingleProductPage/Partials/ImagesSection.jsx";
import ProductInfo from "@/Pages/SingleProductPage/Partials/ProductInfo.jsx";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

export default function SingleProduct(props){
    const product = props.productInfo.data

    return (
        <ProductsLayout>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{top:70}}
                theme="dark"
            />
            <div className="flex flex-col gap-[60px] justify-between items-center md:flex-row">
                <ImagesSection images={props.productImages} />
                <ProductInfo product={product}/>
            </div>
        </ProductsLayout>
    )
}
