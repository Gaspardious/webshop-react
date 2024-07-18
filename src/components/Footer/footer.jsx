
import styles from './footer.module.css'
import { Link } from 'react-router-dom';

export default function Footer (){
return (
    <>
        <footer>
            <div className={styles.footer_section}>


                <ul className={styles.footer_ul}>
                    <img src="Images/ig_white.png" className={styles.footer_logo} alt="" />
                    <img src="Images/fb_white.png" className={styles.footer_logo} alt="" />
                </ul>
       
                <h2 className={styles.brandname}>STICKY SWEATER</h2>
                <p className={styles.footer}>© Made by Dejan Gaspar - 2024</p>
             </div>

        </footer>
    </>
)}

