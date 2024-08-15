import { Link } from 'react-router-dom'
import styles from './homepage.module.css'
import { useState, useEffect } from 'react';

export default function Homepage () {
    const [currentImage, setCurrentImage ] = useState(0);
    const images = [
        "/Images/hjalmar_front.png",
        "/Images/gota_front.png",
        "/Images/gustav_front.png",
        "/Images/linne_front.png",
        "/Images/glenn_front.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval); 
    }, [images.length]);



    return (
    <>
       <div className={styles.hero}>
            <img src={images[currentImage]} alt="" className={styles.slides} />
            <div className={styles.hero__desc}>
                <h1 className={styles.hero_title}>STICKY SWEATER</h1>
                <h2 className={styles.hero_undertitle}>GOTHENBURG</h2>
                <h3 className={styles.tag}>DESIGNED IN SWEDEN - MADE IN ITALY</h3>
                <li className={styles.hero__btn}><Link to="/products">GO TO PRODUCTS</Link></li>
            </div>
        </div> 

<div className={styles.banner}>    
    <h2> STICKY SWEATER - BORN AND RAISED IN GOTHENBURG</h2>
</div>

        <div className={styles.hero_images}>

        <section className={styles.hero_image2}>
         <img className={styles.hero_lifestyle_img} src="/Images/hjalmar_lifestyle.png" alt="Black and White sweater lifestyle image" />  
         <h2 className={styles.hero_image_title}>SALT N PEPPAR</h2>
         <li className={styles.hero__image_btn1}><Link to="/product/3">SEE PRODUCT</Link></li>

         </section>

         <section className={styles.hero_image1}>
            <img className={styles.hero_lifestyle_img} src="/Images/gota_lifestyle1.png" alt="Black sweater lifestyle image" />  
            <h2 className={styles.hero_image_title}>BLACK SWEATERS</h2>
            
            <li className={styles.hero__image_btn2}><Link to="/product/2">SEE PRODUCT</Link></li>

         </section>

        </div>
    </>
    )
    }