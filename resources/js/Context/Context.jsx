import {createContext, useContext, useState, useEffect} from "react";
import axios from "axios";
import { toast } from 'react-toastify';

    const AppContext = createContext({

    });

    export const AppProvider = ({children}) => {
        const [productsData, setProductsData] = useState({
        name:"",
        slug:"",
        quote:"",
        price:null,
        quantity:null,
        published:0,
        description:"" });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [isOpenSidebar, setOpenSidebar] = useState(false)

    const addCartItem = (id) => {
        axios
            .post(`${window.location.protocol}//${window.location.host}/api/cart/add`, {
                product_id: id,
                quantity: 1,
            })
            .then((response) => {
                if(response.status === 201){
                    toast.success(response.data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                    });
                    setCartItems((cart) => [...cart, response.data.data])
                }
            })
            .catch((error) => {
               console.log(error)
            });
    };

    useEffect(() => {
        axios
            .get(`${window.location.protocol}//${window.location.host}/api/cart`, )
            .then((res) => {

                setCartItems(res.data.data);
            });
    }, []);

    const handleDecrement = (cart_id) => {
        setCartItems(cart =>
            cart.map((item) =>
                cart_id === item.id ? {...item, quantity:item.quantity - (item.quantity > 1 ? 1:0)}:item)
        )
        updateCartQuantity(cart_id,"dec")
    }

    const handleIncrement = (cart_id) => {
        setCartItems(cart =>
            cart.map((item) =>
                cart_id === item.id ? {...item, quantity:item.quantity + 1}:item)
        )
        updateCartQuantity(cart_id,"inc")
    }

    //update cart item quantity
    const updateCartQuantity = (cart_id,  scope) => {
        axios.put(`${window.location.protocol}//${window.location.host}/api/cart/${cart_id}/${scope}`)
            .then(response => {
                if(response.status === 201){
                    toast.success(response.data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                    });
                    console.log(response.data,"ressssssssssssssssssssssssssssss")
                }
            })
            .catch((error) => {
                toast.error("The product is out of stock", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    progressStyle: { backgroundColor: "red" }
                });
            });

    }

    //clear cart items
    const clearCart = () => {
        axios.delete(`${window.location.protocol}//${window.location.host}/api/cart/delete-cart`)
            .then(({data}) => {
                setCartItems([])
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return <AppContext.Provider value={{
        productsData,
        setProductsData,
        selectedProduct,
        setSelectedProduct,
        addCartItem,
        cartItems,
        handleIncrement,
        handleDecrement,
        clearCart,
        isOpenSidebar,
        setOpenSidebar
    }}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}
