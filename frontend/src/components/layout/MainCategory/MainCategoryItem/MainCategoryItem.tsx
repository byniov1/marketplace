import styles from './MainCategoryItem.module.scss'

interface MainCategoryItem{
  imagePath?: string;
  description: string;
}

export default function MainCategoryItem({imagePath, description}: MainCategoryItem) {
  return (
    <div className={styles.MainCategoryItem}>
      <img className = {styles.MainCategoryItem__image} src={imagePath} alt = {description}/>
      <p className={styles.MainCategoryItem__item} >{description}</p>
    </div>
  )
}
