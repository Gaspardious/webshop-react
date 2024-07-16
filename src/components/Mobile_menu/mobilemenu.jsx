import styles from './mobilemenu.module.css';
import { Link } from 'react-router-dom';

const Mobilemenu = ({ isMenuOpen, setMenuOpen }) => {
  return (
    <>
      <div className={styles.mobileNav} 
      style={{ width: isMenuOpen ? '60%' : '0' } }
      onClick={() => setMenuOpen(false)}
      >
   
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>PRODUCTS</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
        </ul>
        <img src="Images/logo.png" alt="logo in menu" className={styles.logo}  />
      </div>
      <div 
        className={styles.overlay}
        style={{ width: isMenuOpen ? '40%' : '0' }} 
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Mobilemenu;
