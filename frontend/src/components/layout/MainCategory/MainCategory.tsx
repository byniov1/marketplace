import { kategorie_glowne } from 'src/utility'
import styles from './MainCategory.module.scss'

export function MainCategory() {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Kategorie głowne</h1>
      <ul className={styles.main__category}>
        {kategorie_glowne.map((curr, index) => (
          <li key = {index} className={styles.main__item}>{curr}</li>
        ))}
      </ul>
    </div>
  )
}
