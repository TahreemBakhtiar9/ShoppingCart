import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

export const CartItem = (props) => {
    const{id, productName, price, productImage} = props.data;
    const{addToCart, removeFromCart, updateCartItemCount, cartItems} =useContext(ShopContext)

  return (
    <div className='cartItem'>
        <img src={productImage}/>

        <div className='desc'>
            <p>
                <b> {productName}</b>
            </p>
            <p>
                Rs: {price}
            </p>
            <div className='countHandler'>
                <button onClick={()=>removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={()=> addToCart(id)}> + </button>
            </div>
        </div>
        
    </div>
  )
}
