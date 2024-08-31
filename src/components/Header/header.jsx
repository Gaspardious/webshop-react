import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import Mobilemenu from '../Mobile_menu/mobilemenu';
import Cart from '../Cart/cart';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const header = document.getElementsByClassName(styles.header)[0];
      const logo1 = document.getElementsByClassName(styles.logo1)[0];
      const logo2 = document.getElementsByClassName(styles.logo2)[0];
      const navLinks = document.querySelectorAll(`.${styles.nav_ul} a`);

      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.height = "45px";
        logo1.style.fontSize = "10px";
        logo2.style.fontSize = "21px";
        header.style.background = "var(--mainColor)";
        navLinks.forEach((link) => {
          link.style.fontSize = "14px";
        });

        
      } else {
        header.style.height = "60px";
        logo1.style.fontSize = "15px";
        logo2.style.fontSize = "25px";
        header.style.background = "var(--mainColor)";
        header.style.borderBottom = "0.5px solid white";
        navLinks.forEach((link) => {
          link.style.fontSize = "20px";
        });


      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>

      <Link to="/">
        {/*   <img src="/Images/logo.png" alt="" className={styles.logo} /> */}
        <h1  className={styles.logo1}>STICKY</h1>
        <h1  className={styles.logo2}> SWEATER</h1>
        </Link>

        <nav>
          <ul className={styles.nav_ul}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/products">PRODUCTS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>

<div className={styles.symbols}>
        <img src="/Images/heart_white.png"       className={styles.heart} />

        <Cart isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
        <img src="/Images/icons8-cart-80.png" 
              alt="cart" 
              className={styles.cart}
              onClick={() => setCartOpen(!isCartOpen)}
              />



<Mobilemenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <img src="/Images/icons8-menu-30.svg" 
            alt="menu" 
            className={styles.hamburger_menu}
            onClick={() => setMenuOpen(!isMenuOpen)} 
        />

</div>

      </header>
    </>
  );
}
