import {createContext, useContext, useState} from "react";


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

    return <AppContext.Provider value={{
        productsData,
        setProductsData,
        selectedProduct,
        setSelectedProduct}}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}
