
import { Route, Routes } from 'react-router-dom'
import { Item } from 'src/components/pages/Product'
import { Category } from 'src/components/pages/Category'
import { Header, MainCategory } from 'src/components/layout'

import styles from './Homepage.module.scss'

export const HomePage = () => {
  return (
    <>
    <Header /> 
    <div className={styles.main}>
      <Routes>
        <Route path = '/' element = {<MainCategory />}/>
        <Route path = '/:category' element = {<Category/> }/>
        <Route path = '/product/:product_id' element = {<Item />}/>
      </Routes>

      {/* {items.map((curr, index) => 
        <Item key = {index} imagePaths={curr.imagePaths} name={curr.name} price={curr.price} description={curr.description} />
      )} */}
      {/* 
      <p>HomePage</p>  
      <p>Navigacja</p>
      <p>Wyszukiwanie</p>
      <p>Kategorie Głowne</p>
      <p>Ogłoszenia Promowane</p>
      <p>Footer</p> 
    */}
    </div>
    </>
  )
}