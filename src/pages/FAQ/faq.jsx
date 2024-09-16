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
              <h3 className={styles.faq_question_heading}>How long does shipping take?</h3>
              <p className={styles.faq_question_answer}>Shipping takes 3-5 business days.</p>
            </div>

          </section>

          <section className={`${styles.faq_section} ${styles.faq_returns}`}>
            <h2 className={styles.faq_heading}>RETURNS</h2>
            <div className={styles.faq_question}>
              <h3 className={styles.faq_question_heading}>Can I return my item?</h3>
              <p className={styles.faq_question_answer}>Yes, you can return your item within 30 days of purchase.</p>
            </div>

          </section>
          <section className={`${styles.faq_section} ${styles.faq_terms}`}>

            <h2 className={styles.faq_heading}>TERMS</h2>
            <div className={styles.faq_question}>
              <h3 className={styles.faq_question_heading}>What are your terms?</h3>
              <p className={styles.faq_question_answer}>Our terms are 100% satisfaction guaranteed.</p>
            </div>

          </section>
        </div>
      </div>
    </>
  );
};

export default Faq;
