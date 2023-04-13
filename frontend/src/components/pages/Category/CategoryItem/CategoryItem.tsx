import { ItemI } from "src/utility"
import styles from './CategoryItem.module.scss'

type CategoryItem = Omit<ItemI, 'description'>

export function CategoryItem({imagePaths, name, price}: CategoryItem) {
  return (
    <div>
      <h1>CategoryItem</h1>
      <div className= {`${styles.whiteBackground} ${styles.item}`}>
        <img className = {styles.item__image} src={imagePaths[0]} alt="" />
        <div className={styles.information}>
          <p className={styles.information__name}> {name}</p>
          <p className={styles.information__price}> {price}</p>
        </div>
      </div>
    </div>
  )
}
