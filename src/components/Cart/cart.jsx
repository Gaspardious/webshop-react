import styles from './cart.module.css'
import { useState } from 'react'


import React from 'react'

const Cart = ({ isCartOpen, setCartOpen }) => {
  return (
    <>
      <div
        className={styles.cart}
        style={{ width: isCartOpen ? '60%' : '0' }}
        onClick={() => setCartOpen(false)}
      >
        <div className={styles.close_btn} onClick={() => setCartOpen(false)}>
            <p>X</p>
        </div>

        <h2>CART</h2>

        <div className={styles.cart_items}>
          <img src="" alt="" />
          <div>
            <p>Product Name</p>
            <p>€ 0.00</p>
            <p>Quantity: 1</p>
            </div>
        </div>
        <div className={styles.price} >
          <p><strong>TOTAL</strong> incl. VAT & Duties</p>
          <p>€ 0.00</p>
        </div>
        <button className={styles.checkout_btn}>CHECKOUT</button>

        

       
          


      </div>



      <div
        className={styles.overlay}
        style={{ width: isCartOpen ? '40%' : '0' }}
        onClick={() => setCartOpen(false)}
      />
      

    </>
  )
}

export default Cart
