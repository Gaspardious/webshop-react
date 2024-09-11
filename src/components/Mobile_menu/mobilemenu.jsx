import styles from './mobilemenu.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Mobilemenu = ({ isMenuOpen, setMenuOpen }) => {
  const mobile = window.innerWidth < 768;

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
      <div className={styles.mobileNav} 
      style={{ width: isMenuOpen ? (mobile ? '50%' : '20%') : '0' } }
      onClick={() => setMenuOpen(false)}
      >
   
   <Link to="/">
          <h1 className={styles.logo1}>STICKY</h1>
          <h1 className={styles.logo2}> SWEATER</h1>
        </Link>
        <hr className={styles.line} />
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>PRODUCTS</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
        </ul>
    <hr className={styles.line} />
        <ul>
          <li className={styles.under_menu}><Link to="/" onClick={() => setMenuOpen(false)}>SHIPPING</Link></li>
          <li className={styles.under_menu}><Link to="/" onClick={() => setMenuOpen(false)}>RETURNS</Link></li>
          <li className={styles.under_menu}><Link to="/" onClick={() => setMenuOpen(false)}>TERMS</Link></li>
        </ul>
     <hr className={styles.line} />
        <ol className={styles.social}>
          <li><Link to="/"><img src="Images/ig_black.svg" className={styles.social_logo} alt="Instagram Logo" /></Link></li>
          <li><Link to="/"><img src="Images/fb_black.svg" className={styles.social_logo} alt="Facebook Logo" /></Link></li>
          <li><Link to="/"><img src="Images/tt_black.svg" className={styles.social_logo} alt="Tik Tok Logo" /></Link></li>
        </ol>
   
      </div>
      <div 
        className={styles.overlay}
        style={{ width: isMenuOpen ? (mobile ? '50%' : '80%') : '0' }} 
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Mobilemenu;
