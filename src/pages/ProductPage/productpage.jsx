import styles from './productpage.module.scss';
import productsDatabase from '../../data';
import { useParams, Link, useLocation } from 'react-router-dom';
import Card from '../../components/Card/card';
import { useState, useEffect, useContext } from 'react';
import Badge from '../../components/Badge/badge.jsx';
import { CartContext } from '../../components/Context/cartcontext.jsx'; //NY

function ProductPage({ limit }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const limitProducts = productsDatabase.slice(0, 4);
  const { addToCart } = useContext(CartContext); //NY
  const location = useLocation();
  
  // For swipe gestures
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  

  useEffect(() => {
    const foundProduct = productsDatabase.find((product) => product.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setCurrentImage(foundProduct.img[0]);
    } else {
      setProduct(null);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location]);

  // Handle swipe gesture on touch devices
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swiped left
      nextImage();
    } else if (touchStartX - touchEndX < -50) {
      // Swiped right
      prevImage();
    }
  };

  const nextImage = () => {
    const currentIndex = product.img.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % product.img.length;
    setCurrentImage(product.img[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = product.img.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + product.img.length) % product.img.length;
    setCurrentImage(product.img[prevIndex]);
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className={styles.productpage}>
      <div className={styles.product}>
        <div 
          className={styles.gallary}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
            <p>
              <strong>Description:</strong> {product.desc}
            </p>
            <br />
            <p>
              <strong>Available sizes:</strong> {product.size}
            </p>
          </div>
          <div className={styles.btn_inventory}>
            <div>
              <button
                className={styles.buy_btn}
                onClick={() => addToCart(product)}
              >
                ADD TO CART
              </button>
              <p className={styles.below_btn_text}>FREE SHIPPING AND RETURNS!</p>
            </div>
            <div className={styles.inventory_section}>
              <p>
                <strong>Inventory:</strong>
              </p>
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
        <a className={styles.btn}>
          <Link to="/products">SEE ALL PRODUCTS</Link>
        </a>
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
