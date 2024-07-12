import Star from '../Star/star';
import styles from './card.module.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Card = ({product}) => {
    const[isHovered, setIsHovered] = useState(false)

    function mouseEnter (){
        setIsHovered(true);
    }

    function mouseLeave (){
        setIsHovered(false);
    }

    let badgeText
    if (product.inventory === 0) {
        badgeText = "SOLD OUT"
    } else if (product.inventory <= 3)
        badgeText = "FEW LEFT"

    return (
        <div className={styles.card}>
            {badgeText && <div className={styles.product__badge}>{badgeText}</div>}
            <div className={styles.product__section}>
            <Link to={`/product/${product.id}`}>
                <img src={`../Images/${product.img}`} className={isHovered ? `${styles.sweaters} ${styles.shrink}` : styles.sweaters}         
                onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
            </Link>

                <div className={styles.product__size}>
                                <p><strong>SIZE</strong></p>
                                <p><small>M / L / XL</small></p>
                </div>
            </div>


                <div className={styles.star}>
                    <h1 className={styles.product__company}>STICKY SWEATER</h1>
                    <Star />
                </div>

                <div className={styles.product__info}>
                    <h1 className={styles.product__name}>{product.name}</h1>
                    <h2 className={styles.product__price}>{product.price} SEK</h2>      
                </div>
                <Link to={`/product/${product.id}`}>
                    <button className={styles.product__button}>BUY</button>
                </Link>
        </div>
    );
}

export default Card;