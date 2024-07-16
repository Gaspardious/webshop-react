import styles from './productpage.module.css';
import productsDatabase from '../../data';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/card';


function ProductPage() {
  const { id } = useParams();
  const product = productsDatabase.find((product) => product.id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
    <div className={styles.productpage}>
            <div className={styles.product}>
      
                <div>
                    <img src={`../Images/${product.img[0]}`} alt={product.title} className={styles.products_img} /> 
                    <div className={styles.gallary}>
                      <img src={`../Images/${product.img[0]}`} alt={product.title} className={styles.gallary_img} />
                      <img src={`../Images/${product.img[1]}`} alt={product.title} className={styles.gallary_img} />
                      <img src={`../Images/${product.img[2]}`} alt={product.title} className={styles.gallary_img} />
                      <img src={`../Images/${product.img[3]}`} alt={product.title} className={styles.gallary_img} />
                    </div>
                </div>
                <div className={styles.product_info}>
                  <h1 className={styles.product_name}>{product.name}</h1>
                  <p className={styles.product_price}>Price: {product.price} SEK </p>
                  <div className={styles.products_desc}>
                      <p> <strong>Description:</strong> {product.desc}</p>
                      <p> <strong>Available sizes:</strong>  {product.size}</p>
                      <p> <strong>Inventory:</strong>  {product.inventory}</p>
                  </div>

                  <button className={styles.buy_btn}>ORDER</button>

                  <div className={styles.details}>
              <div className={styles.shipping}>
                <details>
                <summary>SHIPPING</summary>
                <ol>
                  <li> - Free shipping on all orders over 500 SEK</li>
                  <li> - Estimated delivery time: 3-5 days</li>
                  <li> - Return policy: 30 days</li>
                </ol>
                </details>
              </div>

              <div className={styles.returns}>
                <details>
                <summary>RETURNS</summary>
                <ol>
                  <li> - Free returns on all orders</li>
                  <li> - Return policy: 30 days</li>
                </ol>
                </details>
              </div>
            </div>

                </div>
            </div>

            

{            <div className={styles.similar_products}>
              <h2 className={styles.similar_products_title}>SIMILAR PRODUCTS</h2>
              <div className={styles.similar_products_container}>
                {productsDatabase.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </div>
            </div>}


            <div className={styles.reviews}>
              <h2 className={styles.reviews_title}>CUSTOMER REVIEWS</h2>
              <p>There are no reviews yet</p>
              <button className={styles.review_btn}>Add a review</button>

            </div>
    </div>

    </>
  );
}

export default ProductPage;