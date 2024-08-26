import { useEffect, useState } from "react";
import Card from "../../components/Card/card.jsx"
import productsDatabase from "../../data.js"
import styles from './products.module.css'


export default function Products ({ limit }) {
  const limitProducts = productsDatabase.slice(0, limit);


    return (
        <>
          <h2 className={styles.cards_title}>PRODUCTS</h2>
          <p className={styles.product_desc}>Designed in Sweden - Made in Italy</p>
          <div className={styles.main}>
            <section className={styles.cards_list}>
                {limitProducts.map((product) => (
                <Card key={product.id} product={product} />
                ))}
            </section>
          </div>
          </>
      );
    }
  