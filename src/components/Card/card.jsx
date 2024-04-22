
import './card.css'
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
        <div className="card">
            {badgeText && <div className="product__badge">{badgeText}</div>}
            <div className="product__section">
                <img src={`../src/Images/${props.img}`} className={isHovered ? "sweaters shrink" : "sweaters"} onMouseEnter={mouseEnter}  onMouseLeave={mouseLeave} />
                <div className="product__size">
                                <p><strong>SIZE</strong></p>
                                <p><small>M / L / XL</small></p>
                </div>
            </div>

            <h1 className="product__company">STICKY SWEATER</h1>
                <div className="product__info">
                    <h1 className="product__name">{props.name}</h1>
                    <h2 className="product__price">{props.price} SEK</h2>      
                </div>
            <button className="product__button">BUY</button>
        </div>
    );
}