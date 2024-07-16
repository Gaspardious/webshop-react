import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import Mobilemenu from '../Mobile_menu/mobilemenu';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const header = document.getElementsByClassName(styles.header)[0];
      const logo = document.getElementsByClassName(styles.logo)[0];

      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.height = "70px";
        logo.style.width = "70px";
        header.style.background = "var(--mainColor)";

      } else {
        header.style.height = "100px";
        logo.style.width = "110px";
        header.style.background = "var(--mainColor)";

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
      <Mobilemenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <img src="/Images/icons8-menu-30.svg" 
            alt="menu" 
            className={styles.hamburger_menu}
            onClick={() => setMenuOpen(!isMenuOpen)} 
        />
        <Link to="/">
          <img src="/Images/logo.png" alt="" className={styles.logo} />
        </Link>
        <nav>
          <ul className={styles.nav_ul}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/products">PRODUCTS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>
        <img src="/Images/icons8-cart-80.png" alt="cart" className={styles.cart} />
      </header>
    </>
  );
}
