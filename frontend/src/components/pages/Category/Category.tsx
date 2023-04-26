import {ItemI, items} from 'src/utility'
import { CategoryItem } from './CategoryItem'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchProducts } from 'src/utility/fetch';

export function Category() {
  const [items, setItems] = useState([]);
  const {category} = useParams()

  useEffect(() => {
    fetchProducts(setItems,category);
  }, [])

  if(items.length === 0){
    return <h1>Loading ....</h1>
  }

  return (
    <div>
      {
        items.map( (item : ItemI)=> (
        <CategoryItem 
          key = {item.product_id}
          product_id = {item.product_id}
          product_name={item.product_name}
          price={item.price}  
          description={item.description}
          imagePaths={['https://ireland.apollo.olxcdn.com/v1/files/hpo734e1ubc02-PL/image;s=1000x700']} 
        />
        )
      )}  
    </div>
  )
}
