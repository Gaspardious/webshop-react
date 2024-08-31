import styles from './banner.module.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>

    <div className={styles.banner_section}>

      <div className={styles.banner_undersection1}>
        <img src="Images/ig_white.png" className={styles.ig_logo} alt="" />
        <img src="Images/fb_white.png" className={styles.ig_logo} alt="" />
        <p className={styles.banner}>Follow us!</p>
      </div>

      <p className={styles.banner}>DESIGNED IN SWEDEN - MADE IN ITALY</p>

      
      <div className={styles.banner_undersection2}>
        <Link to="/contact"> <p className={styles.banner}>Get in touch with us!</p></Link>
        <Link to="/contact"> <img src="Images/email.png" className={styles.ig_logo} alt="" /></Link>
      </div>


    </div>

    </>
  )
}

export default Banner