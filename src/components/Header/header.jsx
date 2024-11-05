import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import Mobilemenu from '../Mobile_menu/mobilemenu';
import Cart from '../Cart/cart';
import { CartContext } from '../../components/Context/cartcontext';
import { motion } from 'framer-motion';


export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const { cartItems } = useContext(CartContext); 
  const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [cartCountChanged, setCartCountChanged] = useState(false);

  useEffect(() => {
    if (totalItemsInCart > 0) {
      setCartCountChanged(true); // Trigger the animation
      setTimeout(() => setCartCountChanged(false), 500); // Reset animation state after 500ms
    }
  }, [totalItemsInCart]);


  useEffect(() => {
    function handleScroll() {
      const rootStyles = getComputedStyle(document.documentElement); // Get CSS variables from root element in _variables.scss
      const header = document.getElementsByClassName(styles.header)[0];
      const navLinks = document.querySelectorAll(`.${styles.nav_ul} a`);
      const logo1 = document.getElementsByClassName(styles.logo1)[0];
      const logo2 = document.getElementsByClassName(styles.logo2)[0];
      const menu = document.getElementsByClassName(styles.menu)[0];
      const menuBlack = document.getElementsByClassName(styles.menu_black)[0];
      const cart = document.getElementsByClassName(styles.cart)[0];
      const cart_black = document.getElementsByClassName(styles.cart_black)[0];
      const heart = document.getElementsByClassName(styles.heart)[0];
      const heart_black = document.getElementsByClassName(styles.heart_black)[0];


      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.height = "45px";
        header.style.background = "rgba(0, 0, 0, 0.5)";
        header.style.borderBottom = "none";
        logo1.style.color = rootStyles.getPropertyValue('--textColorOne');
        logo2.style.color = rootStyles.getPropertyValue('--textColorOne');
        menu.style.display = "block";
        menuBlack.style.display = "none";
        cart.style.display = "block";
        cart_black.style.display = "none";
        heart.style.display = "block";
        heart_black.style.display = "none";

 /*        navLinks.forEach((link) => {
          link.style.fontSize = "14px";
        }); */
      } else {
        header.style.height = "60px";
        header.style.background = rootStyles.getPropertyValue('--textColorOne');
        header.style.borderBottom = "0.5px solid white";
        logo1.style.color = rootStyles.getPropertyValue('--textColorTwo');
        logo2.style.color = rootStyles.getPropertyValue('--textColorTwo');
        menu.style.display = "none";
        menuBlack.style.display = "block";
        cart.style.display = "none";
        cart_black.style.display = "block";
        heart.style.display = "none";
        heart_black.style.display = "block";
/*         navLinks.forEach((link) => {
          link.style.fontSize = "18px";
        }); */
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
          <img
            src="/Images/menu-white.svg"
            alt="menu"
            className={styles.menu}
            onClick={() => setMenuOpen(!isMenuOpen)}
          />
          <img
            src="/Images/menu-black.svg"
            alt="menu"
            className={styles.menu_black}
            onClick={() => setMenuOpen(!isMenuOpen)}
          />
        <Link to="/">
          <h1 className={styles.logo1}>STICKY</h1>
          <h1 className={styles.logo2}> SWEATER</h1>
        </Link>



        <div className={styles.symbols}>
          <img src="/Images/heart-white.png" className={styles.heart} />
          <img src="/Images/heart-black.png" className={styles.heart_black} />

          {/* Cart icon with number ticker */}
          <motion.div
            className={styles.cart_container}
            onClick={() => setCartOpen(!isCartOpen)}
            animate={{
              rotate: cartCountChanged ? [0, 15, -15, 10, -10, 5, -5, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/Images/shopping-bag-white.png"
              alt="cart"
              className={styles.cart}
              />
            <img
              src="/Images/shopping-bag-black.png"
              alt="cart"
              className={styles.cart_black}
            />
            {/* Display number of items in cart if greater than 0 */}
            {totalItemsInCart > 0 && (
              <span 
              className={styles.cart_count}
              >{totalItemsInCart}</span>
            )}
          </motion.div>
        </div>
      </header>

      {/* Conditionally render the Cart component */}
      {isCartOpen && (
        <Cart isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
      )}
    </>
  );
}
