import styles from './badge.module.css'
import React from 'react'

const Badge = ({ inventory }) => {
  
    let badgeText;
    let badgeStyle = {};

    if (inventory === 0) {
        badgeText = "SOLD OUT";
        badgeStyle.backgroundColor = "red";
    } else if (inventory <= 5) {
        badgeText = "FEW LEFT";
    } else if (inventory > 3) {
        badgeText = "IN STOCK";
        badgeStyle.backgroundColor = "green";
    }

    return (
        <div className={styles.card}>
            {badgeText && <div className={styles.product__badge} style={badgeStyle}>{badgeText}</div>}
        </div>
    );
}

export default Badge;