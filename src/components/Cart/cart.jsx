import styles from './cart.module.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


import React from 'react'

const Cart = ({ isCartOpen, setCartOpen, product }) => {
const [quantity, setQuantity] = useState(1)
const [size, setSize] = useState('M')
/* const { id } = useParams();
const [product, setProduct] = useState(null);
const [currentImage, setCurrentImage] = useState('');
 */

/* useEffect(() => {
  const foundProduct = productsDatabase.find((product) => product.id === id);
  if (foundProduct) {
    setProduct(foundProduct);
    setCurrentImage(foundProduct.img[0]);
  } else {
    setProduct(null);
  }
}, [id]);

if (!product) {
  return <h2>Product not found</h2>;
} */

  return (
    <>
      <div
        className={`${styles.cart} ${isCartOpen ? styles.cartOpen : ''}`}
       
      >
  
        <div className={styles.close_btn} onClick={() => setCartOpen(false)}>
            X
        </div>


        <h2>CART</h2>

          <div className={styles.cart_items}>
            <img src="/public/Images/glenn_front.png" alt="" className={styles.image}  onClick={() => setCartOpen(false)} />

            <img  />

            <div className={styles.info_container}>
              <section className={styles.name_price}>
                <p>product.name</p>
                <p>€ product.price </p>
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
