
// import { CategoryItem } from './CategoryItem'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import { fetchProductsAndSubcategories, fetchSubcategoryProducts } from 'src/utility/fetch';
import { ProductEntitySimplified } from 'types';
// import { SubcategoryList } from './SubcategoryList/SubcategoryList';
import { fetchProductsAndSubcategories, fetchSubcategoryProducts } from 'src/utility';
import { CategoryItem } from '../CategoryItem';
import { Breadcrum } from 'src/components/common';

export function Subcategory({ categories }: any) {
  const [items, setItems] = useState([]);

  let { categoryParam, subcategoryParam } = useParams()

  useEffect(() => {
    fetchSubcategoryProducts(setItems,categoryParam, subcategoryParam);
  }, [])

  if (items.length === 0) {
    return <h1>Loading ....</h1>
  }

  return (
    <>
    <Breadcrum/>
      <div>
        {
          items.map((item: ProductEntitySimplified) => (
            <CategoryItem
              key={item.product_id}
              product_id={item.product_id}
              product_name={item.product_name}
              price={item.price}
              default_picture={item.default_picture}
              city_name={item.city_name}
              created_at={item.created_at}
              product_condition={item.product_condition}
            />
          )
          )}
      </div>
    </>
  )
}
