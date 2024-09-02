import styles from './cart.module.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../components/Context/cartcontext.jsx'; //NY



import React from 'react'

const Cart = ({ isCartOpen, setCartOpen, product }) => {
const [quantity, setQuantity] = useState(1)
const [size, setSize] = useState('M')
const { cartItems } = useContext(CartContext); // Get cartItems from context

  return (
    <>
      <div className={`${styles.cart} ${isCartOpen ? styles.cartOpen : ''}`}>
        <div className={styles.close_btn} onClick={() => setCartOpen(false)}>
            <p>X</p>
        </div>

        <h2>SHOPPING CART</h2>
      
     
    {cartItems.length === 0 ? (
        <p>your cart is empty... 🙄</p>
      ) : (

          <div className={styles.cart_items}>
          {cartItems.map((item, index) => (                // Loop through cartItems and display them in the cart
            <div key={index} className={styles.cart_item}>
              <img 
                src={`/Images/${item.img[0]}`} 
                alt={item.name} 
                className={styles.image} />
                
              <div className={styles.info_container}>

                <section className={styles.name_price}>
                  <p>{item.name} </p>
                  <p> {item.price} SEK </p>
                </section>

                <section className={styles.quantity_size}>
                  
                  <section className={styles.quantity}>
                    <p className={styles.quantity_symbols} onClick={() => setQuantity(quantity - 1)}> - </p>
                    <p className={styles.quantity_symbols}> {quantity}  </p>
                    <p className={styles.quantity_symbols} onClick={() => setQuantity(quantity + 1)} > + </p>
                  </section>

                  <section className={styles.size}>
                    <p>SIZE:</p>

                      <select name="size" className={styles.size_select}>
                        <option className={styles.size_select} value="M">M</option>
                        <option className={styles.size_select} value="L">L</option>
                        <option className={styles.size_select} value="XL">XL</option>
                      </select>
                  </section>

                </section>

              </div>

            </div>
          ) ) }
          </div>
          
      )}








        <div className={styles.checkout} >
          <section className={styles.totalprice}>
            <p><strong>TOTAL</strong> incl. VAT & Duties</p>
            <p> 0.00 SEK</p>
          </section>
          <button className={styles.checkout_btn}>CHECKOUT</button>
        </div>

    </div>

    </>
  )
}

export default Cart
