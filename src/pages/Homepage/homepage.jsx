import { Link } from 'react-router-dom'
import styles from './homepage.module.css'
import { useState, useEffect } from 'react';
import Products from '../Products/products';

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


<div className={styles.hero_video}>
  <video 
    autoPlay 
    loop 
    muted 
    playsInline 
    controls={false}
    onCanPlayThrough={(event) => event.target.play()} // Ensures autoplay works consistently
  >
    <source src="/video/erik.mp4" type="video/mp4" />
    <source src="/video/erik.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>

  <div className={styles.overlay}>
    <h1 className={styles.hero_title2}>STICKY SWEATER</h1>
    <h2 className={styles.hero_undertitle2}>GOTHENBURG</h2>
    <h3 className={styles.tag2}>DESIGNED IN SWEDEN - MADE IN ITALY</h3>
  </div>
</div>

        

<div className={styles.banner}>    
    <h2> STICKY SWEATER - BORN AND RAISED IN GOTHENBURG</h2>
</div>

        <div className={styles.hero_images}>

        <section className={styles.hero_image1} >
            <Link to="/product/3">
                <img className={styles.hero_lifestyle_img} src="/Images/hjalmar_lifestyle2.png" alt="Black and White sweater lifestyle image" />  
                <h2 className={styles.hero_image_title}>SALT N PEPPAR</h2>
            </Link>
         </section>

         <section className={styles.hero_image1}>
            <Link to="/product/1">
                <img className={styles.hero_lifestyle_img} src="/Images/glenn.png" alt="Black sweater lifestyle image" />  
                <h2 className={styles.hero_image_title}> AUTUMN SWEATERS</h2>
            </Link>
         </section>

         <section className={styles.hero_image1}>
            <Link to="/product/5">
                <img className={styles.hero_lifestyle_img} src="/Images/gustav_lifestyle.png" alt="Black and White sweater lifestyle image" />  
                <h2 className={styles.hero_image_title}>COPPER</h2>
            </Link>
         </section>

         <Link to="/product/2">
         <section className={styles.hero_image1}>
                <img className={styles.hero_lifestyle_img} src="/Images/gota_lifestyle1.png" alt="Black sweater lifestyle image" />  
                <h2 className={styles.hero_image_title}>BLACK SWEATER <img className={styles.hero_image_arrow} src="/Images/arrow.png" alt="" /> SHOP NOW </h2>
                <h2 className={styles.hero_image_title}></h2>
         </section>
         </Link>

        </div>

        <div className={styles.hero_products}>
            <Products limit={3} />
            <a className={styles.btn}><Link to="/products">SEE ALL PRODUCTS</Link></a>
        </div>

        <div className={styles.hero}>
            <div className={styles.hero__desc}>
                <h1 className={styles.hero_title}>STICKY SWEATER</h1>
                <h2 className={styles.hero_undertitle}>GOTHENBURG</h2>
                <h3 className={styles.tag}>DESIGNED IN SWEDEN - MADE IN ITALY</h3>
                <li className={styles.hero__btn}><Link to="/products">GO TO PRODUCTS</Link></li>
            </div>
            <img src={images[currentImage]} alt="" className={styles.slides} />
            <li className={styles.hero__btn_mobile}><Link to="/products">GO TO PRODUCTS</Link></li>
        </div> 

    </>
    )
    }