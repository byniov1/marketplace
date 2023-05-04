import { Link } from 'react-router-dom';
import { CategoryEntity } from 'types';

import styles from './MainCategoriesItem.module.scss'
import { useState } from 'react';
import { log } from 'console';

export const MainCategoriesListItem = ({ categories }: any) => {
  const [visible, SetVisible] = useState(true)
  const [givenCat, SetGivenCat] = useState('Elektronika')

  const obj = categories.find((o: any) => o.category_name === givenCat)
  console.log(obj);

  function x(category: any) {
    // SetVisible(prevState => prevState = !prevState)
    SetGivenCat(prevState => prevState = category.category_name)
  }



  return (
    <>
      {
        categories.map((category: CategoryEntity) => (
          <div
            key={category.category_id}
            onClick={() => x(category)}
          >
            {/* <Link 
            to={`http://localhost:9000/${category.category_name}`} 
          > */}
            <div className={styles.MainCategoryItem} >
              <img className={styles.MainCategoryItem__image} src={category.picture} alt={category.category_name} />
              <p className={styles.MainCategoryItem__item} >{category.category_name}</p>
            </div>
            {/* </Link> */}
          </div>
        ))
      }

      <div>
        {visible && <Link to={`http://localhost:9000/${obj.category_name}`}>Kieruj mnie do {obj.category_name} </Link>}
        <hr />
        {visible && obj.subcategories.map((element: any) => (
          <div key={element.subcategory_name}>
            <Link to={`http://localhost:9000/${obj.category_name}/${element.subcategory_name}`}>*****{element.subcategory_name}</Link>
          </div>
        ))
        }
      </div>
    </>
  )
}