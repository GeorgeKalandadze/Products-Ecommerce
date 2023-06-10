import ProductImage from '../../assets/laptop.jpg';
import PrimaryButton from "@/Components/PrimaryButton";
const ProductCard = () => {
    return(
        <div className="p-4 transition duration-300 shadow-lg w-[350px] rounded">
            <img src={ProductImage} className='w-full h-[20.63rem] cursor-pointer'/>
            <p className="text-[1.17rem] mt-4 opacity-90 ">MackBook Air 77</p>
            <div className="mt-4 flex justify-between">
                <h2 className="font-bold text-[1.17rem] ">$3500.99</h2>
                <PrimaryButton className="bg-[#008bd2] rounded-none p-2">Add to Cart</PrimaryButton>
            </div>
        </div>
    )
}

export default ProductCard
