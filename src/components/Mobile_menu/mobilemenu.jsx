import styles from './mobilemenu.module.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Mobilemenu = ({ isMenuOpen, setMenuOpen }) => {
  const mobile = window.innerWidth < 768;

  // Define container variants with stagger effect
  const containerVariants = {
    open: {
      x: 0,
      transition: {
        staggerChildren: 0.10, // Controls the stagger delay between items
        delayChildren: 0.10,   // Initial delay before starting stagger
      },
    },
    closed: { x: '100%' },
  };

  // Define variants for each item
  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.div
        className={styles.mobileNav}
        style={{ width: isMenuOpen ? (mobile ? '50%' : '20%') : '0' }}
        onClick={() => setMenuOpen(false)}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={containerVariants} // Apply container variants here
      >
        <Link to="/">
          <h1 className={styles.logo1}>STICKY</h1>
          <h1 className={styles.logo2}> SWEATER</h1>
        </Link>
        {/* Staggered Menu Items */}
        <motion.ul
          variants={containerVariants} // Apply stagger effect on this list
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <motion.li variants={itemVariants}>
            <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to="/products" onClick={() => setMenuOpen(false)}>PRODUCTS</Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          </motion.li>

          <br />

          <motion.li className={styles.under_menu} variants={itemVariants}>
            <Link to="/faq" onClick={() => setMenuOpen(false)}>SHIPPING</Link>
          </motion.li>
          <motion.li className={styles.under_menu} variants={itemVariants}>
            <Link to="/faq" onClick={() => setMenuOpen(false)}>RETURNS & REFUNDS</Link>
          </motion.li>
          <motion.li className={styles.under_menu} variants={itemVariants}>
            <Link to="/privacypolicy" onClick={() => setMenuOpen(false)}>PRIVACY POLICY</Link>
          </motion.li>
          <motion.li className={styles.under_menu} variants={itemVariants}>
            <Link to="/terms" onClick={() => setMenuOpen(false)}>TERMS & CONDITIONS</Link>
          </motion.li>
        </motion.ul>

        <ol className={styles.social}>
          <li><Link to="/"><img src="Images/ig_black.svg" className={styles.social_logo} alt="Instagram Logo" /></Link></li>
          <li><Link to="/"><img src="Images/fb_black.svg" className={styles.social_logo} alt="Facebook Logo" /></Link></li>
          <li><Link to="/"><img src="Images/tt_black.svg" className={styles.social_logo} alt="TikTok Logo" /></Link></li>
        </ol>
      </motion.div>

      {/* Overlay */}
      <div 
        className={styles.overlay}
        style={{ width: isMenuOpen ? (mobile ? '50%' : '80%') : '0' }} 
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Mobilemenu;
