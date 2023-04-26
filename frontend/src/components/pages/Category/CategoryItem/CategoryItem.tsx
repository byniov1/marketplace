
import { ItemEntitySimplified } from 'types';
import styles from './CategoryItem.module.scss'
import { Link } from "react-router-dom";

export function CategoryItem({pictures, product_name, price, product_id, city_name, created_at, product_condition}: ItemEntitySimplified) {  
  const convertedData  = new Date(created_at).toDateString() 
  
  return (
    <Link to = {`http://localhost:9000/product/${product_id}`} >
      <div className= {`${styles.whiteBackground} ${styles.item}`}>
        <img className = {styles.item__image} src={pictures[0]} alt="" />
        
        
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