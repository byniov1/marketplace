import { ItemI } from "src/utility"
import styles from './CategoryItem.module.scss'
import { Link } from "react-router-dom";

type CategoryItem = Omit<ItemI, 'description'>

export function CategoryItem({imagePaths, product_name, price, description, product_id}: ItemI) {
  if(description.length > 300){
    description = description.slice(0,300);
  }
  
  return (
    <Link to = {`http://localhost:9000/product/${product_id}`} >
      <div className= {`${styles.whiteBackground} ${styles.item}`}>
        <img className = {styles.item__image} src={imagePaths[0]} alt="" />
        
        
        <div className={styles.information}>
          <p className={styles.name}> {product_name}</p>
          <p className={styles.name}> {description}</p>
        </div>
        
        <p className={styles.information__price}> {price}</p>
      </div>
    </Link >
  )
}
