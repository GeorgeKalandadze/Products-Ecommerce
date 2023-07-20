import ProductsLayout from "@/Layouts/ProductsLayout";

const Failure = (props) => {
    return(
        <ProductsLayout>
            <div className="w-full bg-red-600 p-4 rounded">
                <h1 className="text-[16px] text-white">{props.message}</h1>
            </div>
        </ProductsLayout>
    )
}

export default Failure


