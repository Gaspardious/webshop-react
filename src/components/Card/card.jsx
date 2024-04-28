
import Star from '../Star/star';
import styles from './card.module.css'

import React, { useState } from 'react';


export default function Card(props) {
    const[isHovered, setIsHovered] = useState(false)

    function mouseEnter (){
        setIsHovered(true);
    }

    function mouseLeave (){
        setIsHovered(false);
    }

    let badgeText
    if (props.inventory === 0) {
        badgeText = "SOLD OUT"
    } else if (props.inventory <= 3)
        badgeText = "FEW LEFT"

    return (
        <div className={styles.card}>
            {badgeText && <div className={styles.product__badge}>{badgeText}</div>}
            <div className={styles.product__section}>
            <img src={`../Images/${props.img}`} className={isHovered ? `${styles.sweaters} ${styles.shrink}` : styles.sweaters}         
            onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />

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
                    <h1 className={styles.product__name}>{props.name}</h1>
                    <h2 className={styles.product__price}>{props.price} SEK</h2>      
                </div>
            <button className={styles.product__button}>BUY</button>
        </div>
    );
}