import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const ProductInfo = ({product}) => {

    return (
        <div className="flex gap-4 flex-col">
            <h1 className="text-[16px] text-[#008bd2] leading-10 uppercase tracking-wide font-semibold">{product.name}</h1>
            <p className="w-[400px] text-[#69707d]">{product.description} Facilis neque quia possimus. Dolorem quibusdam qui ipsum. Nisi sed omnis enim fuga porro</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 ">
                    <h1 className="font-black text-[28px]">${product.price}</h1>
                    <h2 className="font-bold text-[#008bd2] w-[51px] h-[27px] bg-[#008bd2] bg-opacity-30 flex items-center justify-center rounded-[6px]">30%</h2>
                </div>
                <h2 className="text-[18px]">
                    ${product.price}
                </h2>
            </div>
            <div className="flex items-center justify-between">
                <div className="bg-[#e7eaf1]  py-[14px] flex rounded-[10px]">
                    <button className="w-full px-[20px]  text-center font-bold text-[18px] text-[#008bd2]">-</button>
                    <span className="w-full px-[20px]  text-center font-bold text-[18px]">0</span>
                    <button className="w-full px-[20px]  text-center font-bold text-[18px] text-[#008bd2]">+</button>
                </div>
                <button
                    className="bg-[#008bd2] text-white  px-[40px] py-[14px] text-[18px] font-bold rounded-[10px] flex gap-5"
                    style={{
                        boxShadow: "0 20px 50px -20px #008bd2"
                    }}
                >
                    <ShoppingCartOutlinedIcon/>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductInfo
