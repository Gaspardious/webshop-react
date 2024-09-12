import styles from './checkout.module.css'
import { useContext, useEffect } from 'react';
import { CartContext } from '../../components/Context/cartcontext.jsx'; 

const Checkout = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity; 
    });
    return totalPrice;
  };




  return (
    <>
    <div >

  
    <div className={styles.checkout_summary}>
              <details  className={styles.checkout_details_section}>
                <summary className={styles.checkout_summary_section}>
                  <h3 className={styles.checkout_summary_title}>SHOW ORDER SUMMARY</h3>
                  <p className={styles.checkout_summary_price}>{calculateTotalPrice()} SEK</p>
                </summary>

<div className={styles.cart_items}>
            {cartItems.map((item, index) => (
              <div key={index} className={styles.cart_item}>
                <img 
                  src={`/Images/${item.img[0]}`} 
                  alt={item.name} 
                  className={styles.image} 
                />

                <div className={styles.info_container}>
                  <section className={styles.name_price}>
                    <p>{item.name}</p>
                    <p>{item.price} SEK</p>
                  </section>

                  <section className={styles.quantity_size}>
                    <section className={styles.quantity}>
                      <p 
                        className={styles.quantity_symbols} 
                        onClick={() => updateQuantity(item.id, -1)}
                      > 
                        - 
                      </p>
                      <p className={styles.quantity_symbols}>{item.quantity}</p>
                      <p 
                        className={styles.quantity_symbols} 
                        onClick={() => updateQuantity(item.id, 1)}
                      > 
                        + 
                      </p>
                    </section>

                    <section className={styles.size}>
                      <p>SIZE:</p>
                      <select 
                        name="size" 
                        className={styles.size_select} 
                        value={item.size}
                        // Update size if needed, though it is not currently implemented in the CartContext
                        onChange={(e) => console.log('Size change not yet implemented')}
                      >
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                    </section>
                  </section>
                </div>
              </div>
            ))}
          </div>

      
          <section className={styles.totalprice}>
            <p><strong>TOTAL</strong> incl. VAT & Duties</p>
            <p>{calculateTotalPrice()} SEK</p>
          </section>
   
              </details>
        </div>




  <h3 className={styles.checkout_title}>CONTACT</h3>
    <form className={styles.checkout_form}>
        <input type="email" id="email" name="email" placeholder='Email' required />
        <input type="tel" id="phone" name="phone" placeholder='Phone' required />
    </form>

    <h3 className={styles.checkout_title}>SHIPPING ADDRESS</h3>
    <form className={styles.checkout_form}>
        <input type="text" id="name" name="name" placeholder='First name' required />
        <input type="text" id="name" name="name" placeholder='Last name' required />
        <input type="text" id="address" name="address" placeholder='Street name and number' required />
        <input type="text" id="city" name="city" placeholder='Apartment suite, etc (optional)'  />
        <input type="text" id="Postal code" name="Postal code" placeholder='Postal code' required />
        <input type="text" id="City" name="City" placeholder='City' required />
        <button type="submit">Continue</button>
    </form>




  </div>
    </>
  )
}

export default Checkout