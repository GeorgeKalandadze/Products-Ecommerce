import {createContext, useContext, useState} from "react";
import axios from "axios";


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

    const addCartItem = (id) => {
        axios
            .post(`${window.location.protocol}//${window.location.host}/api/cart/add`, {
                product_id: id,
                quantity: 1,
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
               console.log(error)
            });
    };

    return <AppContext.Provider value={{
        productsData,
        setProductsData,
        selectedProduct,
        setSelectedProduct,
        addCartItem
    }}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}
