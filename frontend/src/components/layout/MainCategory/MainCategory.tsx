import { kategorie_glowne } from 'src/utility'
import { MainCategoryItem } from './MainCategoryItem'
import styles from './MainCategory.module.scss'

export function MainCategory() {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Kategorie głowne</h1>
      <ul className={styles.main__category}>
        {
          kategorie_glowne.map((curr, index) => (
            <MainCategoryItem key = {index} description={curr} imagePath='https://categories.olxcdn.com/assets/categories/olxpl/motoryzacja-5-2x.png'/>
          ))
        }
      </ul>
    </div>
  )
}
