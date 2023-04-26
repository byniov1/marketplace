
import { CategoryItem } from './CategoryItem'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchProducts } from 'src/utility/fetch';
import { ItemEntitySimplified } from 'types';

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
        items.map( (item : ItemEntitySimplified)=> (
        <CategoryItem 
            key={item.product_id}
            product_id={item.product_id}
            product_name={item.product_name}
            price={item.price}
            pictures={item.pictures}
            city_name={item.city_name} 
            created_at={item.created_at}
            product_condition = {item.product_condition}
          />
        )
      )}  
    </div>
  )
}
