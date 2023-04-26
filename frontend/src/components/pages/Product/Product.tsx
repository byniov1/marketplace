import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchProduct } from 'src/utility';
import { ProductEntity } from 'types';

import styles from './Product.module.scss'
import { Carousel } from './Carousel';

export function Product() {
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
    <div className= {styles.item} style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <h1>Item</h1>
      <hr />
      
      <Carousel>
        {
          product[0].pictures.map(imagePath => (
            <img key = {imagePath} src={imagePath} alt={imagePath} />
          ))
        }
      </Carousel>

      
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
