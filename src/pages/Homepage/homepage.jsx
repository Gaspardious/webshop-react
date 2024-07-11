import { Link } from 'react-router-dom'
import styles from './homepage.module.css'



export default function Homepage () {
    return (
    <>
        <div className={styles.hero}>
            <img src="/Images/rosa-fram.jpeg" alt="" className={styles.hero__img} />
            <div className={styles.hero__desc}>
                <h1>SEE ALL PRODUCTS!</h1>
                <h3>MADE IN SWEDEN!</h3>
                <li className={styles.hero__btn}><Link to="/products">GO TO PRODUCTS</Link></li>
            </div>
        </div>
    </>
    )
    }