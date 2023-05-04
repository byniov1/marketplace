import { Link } from "react-router-dom";
import styles from './Subcategory.module.scss'

interface Props {
  categories: any,
  category_name: string | undefined
}

export function SubcategoryList({ categories, category_name }: Props) {
  return (
    <div className={styles.subcategoryList}>
      {
        categories.map((element: any) => (
          <Link
            key={element.subcategory_name}
            to={`http://localhost:9000/${category_name}/${element.subcategory_name}`}
          >
            <p>{element.subcategory_name}</p>
          </Link>
        ))
      }
    </div>
  )
}