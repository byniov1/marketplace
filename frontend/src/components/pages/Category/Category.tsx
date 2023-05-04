import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { fetchProductsAndSubcategories } from 'src/utility';
import { Breadcrum } from 'src/components/common';
import { CategoryItemList, SubcategoryList } from './Components';

export function Category() {
  const [items, setItems] = useState([]);
  const [subcategories, setSubcategories] = useState([])

  let { categoryParam} = useParams()
  
  useEffect(() => {
    fetchProductsAndSubcategories(setItems, setSubcategories, categoryParam);
  }, [])

  if (items.length === 0) {
    return <h1>Loading ....</h1>
  }

  return (
    <>
      <h1>{categoryParam}</h1>
      <Breadcrum/>
      <SubcategoryList categories = {subcategories} category_name = {categoryParam} />
      <CategoryItemList products = {items}/>  
    </>
  )
}