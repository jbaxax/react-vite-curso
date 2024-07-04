import { createContext,useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    // Shopping Cart - Increment quantity
    const [count,setCount] = useState(0);

    //Product Detail - OpenClose
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

     //Checkout Side Menu - OpenClose
     const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen] = useState(false);
     const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
     const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //ProductDetail - Show product
    const [productToSHow,setProductToSHow] = useState({});

    //Shopping Cart - Add products to cart
    const [cartProducts,setCartProducts] = useState([]);

    //Shopping Cart - Order
    const [order,setOrder] = useState([])

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToSHow,
            setProductToSHow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}
