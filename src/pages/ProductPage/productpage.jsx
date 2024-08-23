import styles from './productpage.module.css';
import productsDatabase from '../../data';
import { useParams, Link } from 'react-router-dom';
import Card from '../../components/Card/card';
import { useState, useEffect } from 'react';
import Badge from '../../components/Badge/badge.jsx';


function ProductPage({ limit }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const limitProducts = productsDatabase.slice(0, 4);



  useEffect(() => {
    const foundProduct = productsDatabase.find((product) => product.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setCurrentImage(foundProduct.img[0]);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className={styles.productpage}>
      <div className={styles.product}>
  
        <div className={styles.gallary}>
      
        <div className={styles.product_img_badge}>
          <img
            src={`../Images/${currentImage}`}
            alt={product.name}
            className={styles.products_img}
          />
          <Badge inventory={product.inventory} />

        </div>


          <div className={styles.gallary_section}>
          {product.img.map((image, index) => (
            <img
              key={index}
              src={`../Images/${image}`}
              alt={`${product.name} ${index + 1}`}
              className={styles.gallery_img}
              onClick={() => setCurrentImage(image)}
            />
           
          ))}
           </div>
        </div>
        <div className={styles.product_info}>
          <h1 className={styles.product_name}>{product.name}</h1>
          <p className={styles.product_price}>Price: {product.price} SEK</p>
          <div className={styles.products_desc}>
            <p><strong>Description:</strong> {product.desc}</p>
            <br/>
            <p><strong>Available sizes:</strong> {product.size}</p>
          </div>
          <div className={styles.btn_inventory}>
            <div>
              <button className={styles.buy_btn}>ADD TO CART</button>
              <p className={styles.below_btn_text}>FREE SHIPPING AND RETURNS!</p>
            </div>
            <div className={styles.inventory_section}>
              <p><strong>Inventory:</strong></p>
              <p>{product.inventory}</p>
            </div>
          </div>

          <div className={styles.details}>
            <div className={styles.shipping}>
              <details>
                <summary>SHIPPING</summary>
                <ol>
                  <li>- Free shipping on all orders over 500 SEK</li>
                  <li>- Estimated delivery time: 3-5 days</li>
                  <li>- Return policy: 30 days</li>
                </ol>
              </details>
            </div>
            <div className={styles.returns}>
              <details>
                <summary>RETURNS</summary>
                <ol>
                  <li>- Free returns on all orders</li>
                  <li>- Return policy: 30 days</li>
                </ol>
              </details>
            </div>
          </div>


        </div>
      </div>


      <div className={styles.similar_products}>
        <h2 className={styles.similar_products_title}>SIMILAR PRODUCTS</h2>
        <div className={styles.similar_products_container}>
          {limitProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <a className={styles.btn}><Link to="/products">SEE ALL PRODUCTS</Link></a>
      </div>
      


      <div className={styles.reviews}>
        <h2 className={styles.reviews_title}>CUSTOMER REVIEWS</h2>
        <p>There are no reviews yet</p>
        <button className={styles.review_btn}>Add a review</button>
      </div>
    </div>
  );
}

export default ProductPage;
