
import './star.css'
import React, { useState } from 'react';
import starEmpty from '../../Images/star-empty.png';
import starFilled from '../../Images/star-filled.png';

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
                src={starIcon} className="star"
                alt={contact.isFavorite ? "filled star" : "empty star"} 
                onClick={toggleFavorite} 
            />
        </>
    );
};

export default Star;
