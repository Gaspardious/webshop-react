import styles from './cart.module.css'
import { useContext, useEffect } from 'react';
import { CartContext } from '../../components/Context/cartcontext.jsx'; // NY

const Cart = ({ isCartOpen, setCartOpen }) => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext); // Use context functions

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity; 
    });
    return totalPrice;
  };

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);
  

  return (
    <>
      <div className={`${styles.cart} ${isCartOpen ? styles.cartOpen : ''}`}>
        <div className={styles.close_btn} onClick={() => setCartOpen(false)}>
            <p>X</p>
        </div>

        <h2 className={styles.cart_title}>SHOPPING BAG</h2>

        {cartItems.length === 0 ? (
          <p>Your shopping bag is empty... 🙄</p>

        ) : (
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
        )}

        <div className={styles.checkout}>
          <section className={styles.totalprice}>
            <p><strong>TOTAL</strong> incl. VAT & Duties</p>
            <p>{calculateTotalPrice()} SEK</p>
          </section>
          <button className={styles.checkout_btn}>CHECKOUT</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
