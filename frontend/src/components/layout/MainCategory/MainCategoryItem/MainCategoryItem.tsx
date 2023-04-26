import { Link } from 'react-router-dom';
import { CategoryEntityExtended } from 'types';

import styles from './MainCategoryItem.module.scss'

export function MainCategoryItem({name, picture, to}: CategoryEntityExtended) {

  return (
    <Link to = {`http://localhost:9000/${to}`} >
    <div className={styles.MainCategoryItem}>
      <img className = {styles.MainCategoryItem__image} src={picture} alt = {name}/>
      <p className={styles.MainCategoryItem__item} >{name}</p>
    </div>
    </Link>
  )
}
