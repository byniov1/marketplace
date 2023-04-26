
import { ItemEntitySimplified } from 'types';
import styles from './CategoryItem.module.scss'
import { Link } from "react-router-dom";

export function CategoryItem({pictures, product_name, price, product_id}: ItemEntitySimplified) {  
  return (
    <Link to = {`http://localhost:9000/product/${product_id}`} >
      <div className= {`${styles.whiteBackground} ${styles.item}`}>
        <img className = {styles.item__image} src={pictures[0]} alt="" />
        
        
        <div className={styles.information}>
          <p className={styles.name}> {product_name}</p>
        </div>
        
        <p className={styles.information__price}> {price}</p>
      </div>
    </Link >
  )
}
