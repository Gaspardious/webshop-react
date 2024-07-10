import styles from './productpage.module.css'
import { Link } from 'react-router-dom'


const Productpage = ({ product }) => {
  return (
    <div className={styles.productpage}>
      <div className={styles.product_section}>
        <Link to={`/product/${product.id}`}>
          <img src='/images/bookCover.jpg' alt={product.title} className={styles.books_img} />
        </Link>
        <h2 className={styles.books_title}>{product.title}</h2>
        <Link to={`/book/${product.id}`}>
          <button className={styles.books_btn}>ORDER</button>
        </Link>
      </div>
    </div>
  );
}

export default Productpage
