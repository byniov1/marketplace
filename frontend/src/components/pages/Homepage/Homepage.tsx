import { Route, Routes } from 'react-router-dom'

import { Category, Product } from 'src/components/pages'
import { MainCategories} from 'src/components/layout'
import { Header } from 'src/components/common'
import { Subcategory } from '../Category/Components'

import styles from './Homepage.module.scss'

export const HomePage = () => {
  return (
    <>
    <Header /> 
    <div className={styles.main}>
      <Routes>
        <Route path = '/' element = {<MainCategories/>}/>
        <Route path = '/:categoryParam' element = {<Category /> }/>
        <Route path = '/:categoryParam/:subcategoryParam' element = {<Subcategory/> }/>
        
        <Route path = '/Product/:product_id' element = {<Product />}/>
      </Routes>
    </div>
    </>
  )
}