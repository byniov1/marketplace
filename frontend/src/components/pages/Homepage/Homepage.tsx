import { Route, Routes } from 'react-router-dom'
import { Category, Item } from 'src/components/pages'
import { MainCategories} from 'src/components/layout'
import { Header } from 'src/components/common'

import styles from './Homepage.module.scss'

export const HomePage = () => {
  return (
    <>
    <Header /> 
    <div className={styles.main}>
      <Routes>
        <Route path = '/' element = {<MainCategories />}/>
        <Route path = '/:category' element = {<Category/> }/>
        <Route path = '/product/:product_id' element = {<Item />}/>
      </Routes>
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