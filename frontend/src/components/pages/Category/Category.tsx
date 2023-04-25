import {ItemI, items} from 'src/utility'
import { CategoryItem } from './CategoryItem'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Category() {
  const [items, setItems] = useState([]);
  const {category} = useParams()
  // console.log(category);
  
  const fetchProducsts  = async () => {
    const response = await fetch(`http://localhost:9001/cat/${category}`)
    const data = await response.json()
    setItems(data)
    console.log(data);
  }

  useEffect(() => {
    fetchProducsts();
  }, [])

  if(items.length === 0){
    return <h1>Loading ....</h1>
  }

  return (
    <div>
      {
        items.map( (item : ItemI)=> (
        <CategoryItem 
          key = {item.id}
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
