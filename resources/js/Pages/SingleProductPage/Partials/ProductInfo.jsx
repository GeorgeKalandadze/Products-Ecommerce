import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useGlobalContext } from "@/Context/Context.jsx";
import un from "../../../../../public/build/assets/DeleteUserForm-203596d2.js";

const ProductInfo = ({ product }) => {
    const { addCartItem, cartItems, handleIncrement, handleDecrement } = useGlobalContext();
    const cart = cartItems.find((cart) => cart.product.productId === product.id);

    const isCartEmpty = cart === undefined;

    return (
        <div className="flex gap-4 flex-col">
            <h1 className="text-[16px] text-[#008bd2] leading-10 uppercase tracking-wide font-semibold">
                {product.name}
            </h1>

            <h1 className="w-[500px] text-[32px] font-semibold break-words">{product.quote}</h1>
            <p className="w-[400px] text-[#69707d] break-words">{product.description}</p>
            {product.quantity === 0 && <p className="text-red-600 text-[20px]">
                Product is out of the stock
            </p>}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="font-black text-[28px]">${product.price}</h1>
                    <h2 className="font-bold text-[#008bd2] w-[51px] h-[27px] bg-[#008bd2] bg-opacity-30 flex items-center justify-center rounded-[6px]">
                        30%
                    </h2>
                </div>
                <h2 className="text-[18px]">${product.price}</h2>
            </div>
            <div className="flex items-center justify-between">
                <div className={`bg-[#e7eaf1] py-[14px] flex rounded-[10px] ${isCartEmpty ? 'opacity-50' : ''}`}>
                    <button
                        className="w-full px-[20px] text-center font-bold text-[18px] text-[#008bd2]"
                        onClick={() => handleDecrement(cart.id)}
                        disabled={isCartEmpty}
                        style={{ opacity: isCartEmpty ? 0.5 : 1 }}
                    >
                        -
                    </button>
                    <span className="w-full px-[20px] text-center font-bold text-[18px]">
                        {cart ? cart.quantity : 0}
                    </span>
                    <button
                        className="w-full px-[20px] text-center font-bold text-[18px] text-[#008bd2]"
                        onClick={() => handleIncrement(cart.id)}
                        disabled={isCartEmpty}
                        style={{ opacity: isCartEmpty ? 0.5 : 1 }}
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => addCartItem(product.id)}
                    className="bg-[#008bd2] text-white px-[40px] py-[14px] text-[18px] font-bold rounded-[10px] flex gap-5"
                    style={{
                        boxShadow: "0 20px 50px -20px #008bd2",
                    }}
                >
                    <ShoppingCartOutlinedIcon />
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
