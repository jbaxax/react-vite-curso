import { createContext,useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    // Shopping Cart - Increment quantity
    const [count,setCount] = useState(0);

     //ProductDetail - OpenClose
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //ProductDetail - Show product
    const [productToSHow,setProductToSHow] = useState({});


    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToSHow,
            setProductToSHow

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}
