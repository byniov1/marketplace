import { ItemI } from "src/utility"
import styles from './CategoryItem.module.scss'

type CategoryItem = Omit<ItemI, 'description'>

export function CategoryItem({imagePaths, product_name, price, description}: ItemI) {
  if(description.length > 300){
    description = description.slice(0,300);
  }
  
  return (
    <>
      <div className= {`${styles.whiteBackground} ${styles.item}`}>
        <img className = {styles.item__image} src={imagePaths[0]} alt="" />
        
        
        <div className={styles.information}>
          <p className={styles.name}> {product_name}</p>
          <p className={styles.name}> {description}</p>
        </div>
        
        <p className={styles.information__price}> {price}</p>
      </div>
    </>
  )
}
