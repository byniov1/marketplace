import {items} from 'src/utility'
import { CategoryItem } from './CategoryItem'

export function Category() {
  return (
    <div>
      <h1>Category</h1>
      {
        items.map((curr, index) => (
        <CategoryItem 
          key = {index}
          imagePaths={curr.imagePaths} 
          name={curr.name} 
          price={curr.price}  
          />
        )
      )}  
    </div>
  )
}
