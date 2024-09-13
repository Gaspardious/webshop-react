
import styles from './footer.module.scss'
import { Link } from 'react-router-dom';

export default function Footer (){
return (
    <>
        <footer>
            
            <div className={styles.footer_section}>


                <ul className={styles.footer_ul}>
                    <img src="Images/ig_black.svg" className={styles.footer_logo} alt="Instagram Logo" />
                    <img src="Images/fb_black.svg" className={styles.footer_logo} alt="Facebook Logo" />
                    <img src="Images/tt_black.svg" className={styles.footer_logo} alt="Tik Tok Logo" />
                </ul>
       
                <h2 className={styles.brandname}>STICKY SWEATER</h2>
                <p className={styles.footer}>© Made by Dejan Gaspar - 2024</p>
             </div>

        </footer>
    </>
)}

