import { useEffect, useState } from 'react';
import styles from './Item.module.scss'
import { useParams } from 'react-router-dom';
import { fetchProduct } from 'src/utility';
import { ProductEntity } from 'types';

export function Item() {
  const [product, setProduct] = useState<ProductEntity[] | null>(null)
  const {product_id} = useParams()

  useEffect(() => {
    console.log('UseEffect Item');
    fetchProduct(setProduct, product_id);
  }, [])

  if(product === null){
    return <h1>Loading...</h1>
  }


  return (
    <div className= {styles.item}>
      <h1>Item</h1>
      <hr />
      
      {/* Karuzela */}
      <div className={`${styles.carousel} ${styles.whiteBackground}`}>
        <img className = {styles.carousel__image} src={product[0].pictures[0]} alt="fdafds" />
      </div>
      
      {/* Opis */}
      <div className={`${styles.information} ${styles.whiteBackground}`}>
        <h2>{product[0].product_name}</h2>
        <h3> {product[0].price} zł</h3>
        <hr />
        <p>{product[0].description}</p>
      </div>

    </div>
  )
}
