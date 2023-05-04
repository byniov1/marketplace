
import { ProductEntitySimplified } from 'types';
import styles from './CategoryItem.module.scss'
import { Link } from "react-router-dom";

export function CategoryItem({default_picture, product_name, price, product_id, city_name, created_at, product_condition}: ProductEntitySimplified) {  
  const convertedData  = new Date(created_at).toDateString() 
  // console.log('Component Category item', pictures);
  
  return (
    <Link to = {`http://localhost:9000/Product/${product_id}`} >
      <div className= {`${styles.whiteBackground} ${styles.item}`}>
        {/* <img className = {styles.item__image} src={pictures[0]} alt="" /> */}
        <img className = {styles.item__image} src={default_picture} alt="" />
        
        
        <div className={styles.information}>
          <p className={styles.name}> {product_name}</p>
          <p className={styles.name}> {product_condition}</p>
          <p className={styles.name} >{city_name}</p>
          <p className={styles.name} >{convertedData}</p>
        </div>
        
        <p className={styles.information__price}> {price}</p>
      </div>
    </Link >
  )
}