import { MainCategory } from 'src/components/layout/MainCategory'
import { Item } from 'src/components/pages/Item'
import styles from './homepage.module.scss'

import { items } from 'src/utility'
import { Category } from 'src/components/pages/Category'

export const HomePage = () => {
  return (
    <div className={styles.main}>
      <MainCategory />
      {items.map((curr, index) => 
        <Item key = {index} imagePaths={curr.imagePaths} name={curr.name} price={curr.price} description={curr.description} />
      )}
      <Category/>
      {/* 
      <p>HomePage</p>  
      <p>Navigacja</p>
      <p>Wyszukiwanie</p>
      <p>Kategorie Głowne</p>
      <p>Ogłoszenia Promowane</p>
      <p>Footer</p> 
      */}
    </div>
  )
}