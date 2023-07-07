import React from 'react'

export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1 ; i < PRODUCTS.length +1 ; i++){
        cart[i] = 0;
    };
    return cart;
    };

export const ShopContextProvider = (props) => {
    const [cartItems , setCartItems] = useState(getDefaultCart());

    const addToCart = () => {
        setCartItems((prev)= (itemId) => {
            setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}));
        });
    };

    const removeFromCart =() => {
        setCartItems((prev) => ({...prev, [itemId] : [itemId] - 1}));
    };

    const contextValue = { cartItems , addToCart , removeFromCart};

  return (
    <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>
  )
}
