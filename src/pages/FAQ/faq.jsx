import styles from './faq.module.scss';
import React from 'react';


const Faq = () => {
  return (
    <>
      <div>
        <h1 className={styles.heading}>FAQ</h1>
        <div className={styles.container}>
          <section className={`${styles.faq_section} ${styles.faq_shipping}`}>
            <h2 className={styles.faq_heading}>SHIPPING</h2>
            <div className={styles.faq_question}>

              <details> 
                <summary className={styles.faq_question_heading}>How long does shipping take?</summary>
                <ol>
                  <li className={styles.faq_question_answer}>- Orders before 15:00 (European time) are shipped the same day 🚚 💨</li>
                  <li className={styles.faq_question_answer}>- Orders after 15:00 (European time) usually take 1-2 days to complete, after which it will be shipped.</li>
                  <li className={styles.faq_question_answer}>- All our orders are tracked.</li>
                  <li className={styles.faq_question_answer}>- We use DHL and PostNord as couriers.</li>
                </ol>

                <ol>  
                Delivery time depends on your location, but can be calculated as follows: 
                  <li>Sweden: 1 - 3 business days</li>
                  <li>Europe: 3-4 business days</li>
                  <li>United States: 6-8 working days</li>
                  <li>International: 10-20 working days</li>
                </ol>
                </details>

            </div>

          </section>

          <section className={`${styles.faq_section} ${styles.faq_returns}`}>
            <h2 className={styles.faq_heading}>RETURNS & REFUNDS</h2>
            <div className={styles.faq_question}>
              <h3 className={styles.faq_question_heading}>Can I return my item?</h3>
              <p className={styles.faq_question_answer}> We have a 14-day return policy, which means you have 14 days after receiving your item to request a return.</p>

<p>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase. </p>

<p>To start a return, you can contact us at marketing@stickysweater.com. If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted. </p>

<p>You can always contact us for any return question at <em>marketing@stickysweater.com.</em> </p>

<strong>Damages and issues</strong>
<p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right. </p> <br />

 <strong>Exchanges</strong><br />
<p>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p> <br />

 <strong>Refunds</strong> <br />
<p>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too. </p>

            </div>

          </section>

        </div>
      </div>
    </>
  );
};

export default Faq;
