import styles from './productpage.module.css';
import productsDatabase from '../../data';
import { useParams } from 'react-router-dom';


function ProductPage() {
  const { id } = useParams();
  const product = productsDatabase.find((product) => product.id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
    <div className={styles.productpage}>
          <p className={styles.banner}>DESIGNED IN SWEDEN - MADE IN ITALY</p>
            <div className={styles.product}>
                <div>
                    <img src={`../Images/${product.img}`} alt={product.title} className={styles.products_img} />
                </div>
                <div className={styles.product_info}>
                  <h1>{product.name}</h1>
                  <p>Price: {product.price} SEK </p>
                  <div className={styles.products_desc}>
                      <p> <strong>Description:</strong> {product.desc}</p>
                      <p> <strong>Available sizes:</strong>  {product.size}</p>
                      <p> <strong>Inventory:</strong>  {product.inventory}</p>
                  </div>
                  <button className={styles.buy_btn}>ORDER</button>
                </div>
            </div>
    </div>
    </>
  );
}

export default ProductPage;