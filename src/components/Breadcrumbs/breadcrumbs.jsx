import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import styles from './breadcrumbs.module.css';
import productsDatabase from '../../data';

const Breadcrumbs = () => {
  const location = useLocation();
  const { id } = useParams();
  
  let breadcrumbTrail;

  if (location.pathname.startsWith('/product/') && id) {
    const product = productsDatabase.find(product => product.id === id);
    
    if (!product) {
      breadcrumbTrail = <div>Product not found</div>;
    } else {
      breadcrumbTrail = (
        <>
          <Link to="/" className={styles.breadcrumbs_link}>Home / </Link>  
          <Link to="/products" className={styles.breadcrumbs_link}> Products /</Link>  
          <Link to={`/product/${product.id}`} className={styles.breadcrumbs_link}> {product.name}</Link>
        </>
      );
    }
  } else if (location.pathname === '/about') {
    breadcrumbTrail = (
      <>
        <Link to="/" className={styles.breadcrumbs_link}>Home  /</Link> 

        <Link to="/about" className={styles.breadcrumbs_link}> About</Link>
      </>
    );
  } else if (location.pathname === '/products') {
    breadcrumbTrail = (
      <>
        <Link to="/" className={styles.breadcrumbs_link}>Home /</Link>  
        <Link to="/products" className={styles.breadcrumbs_link}> Products</Link>
      </>
    );
  } else if (location.pathname === '/contact') {
    breadcrumbTrail = (
      <>
        <Link to="/" className={styles.breadcrumbs_link}>Home /</Link> 
        <Link to="/contact" className={styles.breadcrumbs_link}> Contact</Link>
      </>
    );
  } else {
    breadcrumbTrail = (
      <Link to="/" className={styles.breadcrumbs_link}> </Link>
    );
  }

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbTrail}
    </div>
  );
}

export default Breadcrumbs;
