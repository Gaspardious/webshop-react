import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import Mobilemenu from '../Mobile_menu/mobilemenu';
import Cart from '../Cart/cart';
import { CartContext } from '../../components/Context/cartcontext';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const { cartItems } = useContext(CartContext); 
  const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    function handleScroll() {
      const header = document.getElementsByClassName(styles.header)[0];
      const navLinks = document.querySelectorAll(`.${styles.nav_ul} a`);

      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.height = "45px";
        header.style.background = "var(--mainColor)";
        navLinks.forEach((link) => {
          link.style.fontSize = "14px";
        });
      } else {
        header.style.height = "60px";
        header.style.background = "var(--mainColor)";
        header.style.borderBottom = "0.5px solid white";
        navLinks.forEach((link) => {
          link.style.fontSize = "18px";
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
          <h1 className={styles.logo1}>STICKY</h1>
          <h1 className={styles.logo2}> SWEATER</h1>
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
          <img src="/Images/heart_white.png" className={styles.heart} />

          {/* Cart icon with number ticker */}
          <div className={styles.cart_container} onClick={() => setCartOpen(!isCartOpen)}>
            <img
              src="/Images/icons8-shopping-bag-50.png"
              alt="cart"
              className={styles.cart}
            />
            {/* Display number of items in cart if greater than 0 */}
            {totalItemsInCart > 0 && (
              <span className={styles.cart_count}>{totalItemsInCart}</span>
            )}
          </div>

          <Mobilemenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          <img
            src="/Images/icons8-menu-30.svg"
            alt="menu"
            className={styles.hamburger_menu}
            onClick={() => setMenuOpen(!isMenuOpen)}
          />
        </div>
      </header>

      {/* Conditionally render the Cart component */}
      {isCartOpen && (
        <Cart isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
      )}
    </>
  );
}
