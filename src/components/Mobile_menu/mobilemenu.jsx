import styles from './mobilemenu.module.css'




const Mobilemenu = () => {
  return (
<>
    <div className={styles.overlay}>
      <a href="javascript:void(0)" className={styles.closebtn} onClick="closeNav()">&times;</a>
      <div className={styles.overlay_content}>
        <nav>
          <ul className={styles.nav_ul}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/products">PRODUCTS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.background_overlay}></div>
    </div>
    </>
    )
}

export default Mobilemenu