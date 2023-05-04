import { ProductEntitySimplified } from "types";
import { CategoryItem } from "..";

export function CategoryItemList({ products }: any) {
  return (
    <div>
      {
        products.map((item: ProductEntitySimplified) => (
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
  )
}
