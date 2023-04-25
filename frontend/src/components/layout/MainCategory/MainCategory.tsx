import { MainCategoryItem } from './MainCategoryItem'
import { useEffect, useState } from 'react'
import { CategoryEntity } from 'types'

import styles from './MainCategory.module.scss'
import { fetchCategories } from 'src/utility/fetch';

export interface CategoryEntityExtended extends CategoryEntity {
  to: string;
  imagePath: string;
}

export function MainCategory() {  
  const [categories, setCategories] = useState([])

  useEffect(() => {    
    fetchCategories(setCategories);
  }, [])
  
  if(categories.length === 0){
    return <h1>Loading ....</h1>
  }
  
  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Kategorie głowne</h1>
      <ul className={styles.main__category}>
        {
          categories.map( (category: CategoryEntityExtended) => (
            <MainCategoryItem 
              key={category.id}
              name={category.name}
              to={category.name}
              imagePath='https://categories.olxcdn.com/assets/categories/olxpl/motoryzacja-5-2x.png' 
              id={''}
            />
          ))
        }
      </ul>
    </div>
  )
}
