import styles from './cart.module.css'
import { useState } from 'react'


import React from 'react'

const Cart = ({ isCartOpen, setCartOpen }) => {
  return (
    <>
      <div
        className={styles.cart}
        style={{ width: isCartOpen ? '100%' : '0' }}
        onClick={() => setCartOpen(false)}
      >
        <div className={styles.close_btn} onClick={() => setCartOpen(false)}>
            X
        </div>


        <h2>CART</h2>

          <div className={styles.cart_items}>
            <img src="/public/Images/glenn_front.png" alt="" className={styles.image} />
            <div className={styles.info_container}>
              <section className={styles.name_price}>
                <p>Product Name</p>
                <p>€ 0.00</p>
              </section>
              <section className={styles.quantity_size}>
                
                <section className={styles.quantity}>
                  <p> - </p>
                  <p>1</p>
                  <p> + </p>
                </section>
                
                <p>Size: XL</p>
              </section>
              </div>
          </div>
  
        <div className={styles.checkout} >
          <section className={styles.totalprice}>
            <p><strong>TOTAL</strong> incl. VAT & Duties</p>
            <p>€ 0.00</p>
          </section>
          <button className={styles.checkout_btn}>CHECKOUT</button>
        </div>


      </div>
    </>
  )
}

export default Cart
