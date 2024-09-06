import styles from './banner.module.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>

    <div className={styles.banner_section}>

      <div className={styles.banner_undersection1}>
        <img src="Images/ig_black.svg" className={styles.ig_logo} alt="Instagram Logo" />
        <img src="Images/fb_black.svg" className={styles.ig_logo} alt="Facebook Logo" />
        <p className={styles.banner}>Follow us!</p>
      </div>

      <p className={styles.middle_banner}>FAST SHIPPING  -  30 DAYS FREE RETURNS</p>

      
      <div className={styles.banner_undersection2}>
        <Link to="/contact"> <p className={styles.banner}>Get in touch with us!</p></Link>
        <Link to="/contact"> <img src="Images/letter_black.png" className={styles.ig_logo} alt="Letter/Email - Logo" /></Link>
      </div>


    </div>

    </>
  )
}

export default Banner