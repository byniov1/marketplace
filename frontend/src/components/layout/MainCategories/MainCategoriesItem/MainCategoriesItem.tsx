import { Link } from 'react-router-dom';
import { CategoryEntityExtended } from 'types';

import styles from './MainCategoriesItem.module.scss'

export function MainCategoriesItem({category_name, picture, to}: CategoryEntityExtended) {

  return (
    <Link to = {`http://localhost:9000/${to}`} >
    <div className={styles.MainCategoryItem}>
      <img className = {styles.MainCategoryItem__image} src={picture} alt = {category_name}/>
      <p className={styles.MainCategoryItem__item} >{category_name}</p>
    </div>
    </Link>
  )
}
