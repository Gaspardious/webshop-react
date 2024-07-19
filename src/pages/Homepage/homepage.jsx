import { Link } from 'react-router-dom'
import styles from './homepage.module.css'


export default function Homepage () {

    

    return (
    <>
        <div className={styles.hero}>
            <img src="/Images/hjalmar_front.png" alt="" className={styles.slides} />
            <div className={styles.hero__desc}>
                <h1 className={styles.hero_title}>STICKY SWEATER</h1>
                <h2 className={styles.hero_undertitle}>GOTHENBURG</h2>
                <h3 className={styles.tag}>DESIGNED IN SWEDEN - MADE IN ITALY</h3>
                <li className={styles.hero__btn}><Link to="/products">GO TO PRODUCTS</Link></li>
            </div>
        </div>
    </>
    )
    }