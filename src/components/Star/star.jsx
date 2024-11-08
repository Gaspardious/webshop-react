
import styles from './star.module.scss'  
import React, { useState } from 'react';
const starEmpty = "/Images/heart.png"
const starFilled = "/Images/heart_filled.png"

const Star = () => {
    const [contact, setContact] = useState({ isFavorite: false });

    const toggleFavorite = () => {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }));
    };

    let starIcon = contact.isFavorite ? starFilled : starEmpty;

    return (
        <>
            <img 
                src={starIcon} className={styles.star}
                alt={contact.isFavorite ? "filled star" : "empty star"} 
                onClick={toggleFavorite} 
            />
        </>
    );
};

export default Star;
