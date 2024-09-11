import styles from './checkout.module.css'
import { useContext } from 'react'  

const Checkout = () => {
  return (
    <>
    <div >

  
    <div className={styles.checkout_summary}>

        <div className={styles.checkout_summary_item}>

        </div>

              <details>
                <summary className={styles.checkout_summary_title}>SHOW ORDER SUMMARY</summary>
                <ol>
                <p>Product name</p>
                <p>Price</p>
                </ol>
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