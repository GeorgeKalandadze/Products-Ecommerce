import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useGlobalContext} from "@/Context/Context.jsx";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 14,
    p: 4,
    maxHeight: '95vh',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 transparent',
    border:0
};

const CartItemModal = ({open, close}) => {
    const {cartItems, handleDecrement, handleIncrement, clearCart} = useGlobalContext()

    const totalPrice = () => {
        return cartItems.reduce((accum, next) => accum + next.product.price * next.quantity, 0)
    }

    const makeCheckout = () => {
        axios
            .post(
                `${window.location.protocol}//${window.location.host}/api/checkout`,
                {},
                {
                    headers: {
                        "Access-Control-Allow-Origin" : "*",
                        'Access-Control-Allow-Headers': '*'
                    },
                }
            )
            .then((response) => {
                console.log(response);
                window.location.href = response.data.session_url
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="w-full flex flex-col">
                        <div className="flex justify-between border-b-2 border-gray-300 py-4">
                            <h1 className="font-bold text-[20px]">Shopping Cart ({cartItems.length})</h1>
                            <button
                                className="border-none outline-none font-normal font-medium text-base leading-6 underline text-black mix-blend-normal opacity-50 bg-transparent cursor-pointer"
                                onClick={() => clearCart()}
                            >
                                Remove All
                            </button>
                        </div>
                        {cartItems.map((cart) => (
                            <div className="border-b-2 border-gray-300 py-4 flex justify-between">

                                <div className="flex gap-3 ">
                                    <img src={cart.product.image} className="w-[80px] h-[70px]"/>
                                    <div className="flex flex-col justify-between">
                                        <p className="font-bold">{cart.product.name}</p>
                                        <p className="text-gray-500">{cart.product.price}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <button className="px-3" onClick={() => handleDecrement(cart.id)}>-</button>
                                        <span className="px-3 py-2 bg-gray-100">{cart.quantity}</span>
                                        <button className="px-3" onClick={() => handleIncrement(cart.id)}>+</button>
                                    </div>
                                    <p className="font-bold">{cart.quantity * cart.product.price}$</p>
                                </div>
                            </div>
                        ))}
                        <div className="mt-4 flex flex-col gap-4">
                            <div className="flex justify-between">
                                <p className="text-gray-500">Subtotal</p>
                                <p className="font-medium">90.00$</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-500">Shipping</p>
                                <p className="font-medium">10.00$</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-500 font-bold">Total</p>
                                <p className="font-bold text-[20px]">{totalPrice()}$</p>
                            </div>
                        </div>
                        <button
                            className="px-8 py-3 bg-[#194f7d] text-white font-bold text-center mt-4"
                            onClick={() => makeCheckout()}
                        >
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default CartItemModal
