
import styles from './footer.module.css'
import { Link } from 'react-router-dom';

export default function Footer (){
return (
    <>
        <footer>
            <div className={styles.footer_section}>


                <ul className={styles.nav_ul}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/products">PRODUCTS</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                <p className={styles.footer}>© Made by Dejan Gaspar - 2024</p>
                <h2 className={styles.brandname}>STICKY SWEATER</h2>
             </div>

        </footer>
    </>
)}

