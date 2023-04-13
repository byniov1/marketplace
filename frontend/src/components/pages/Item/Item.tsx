import styles from './Item.module.scss'

export interface ItemI {
  imagePaths: string[];
  name: string;
  price: number;
  description: string;
}

export function Item({imagePaths, name, price, description}: ItemI) {
  return (
    <div className= {styles.item}>
      <h1>Item</h1>
      <hr />
      
      {/* Karuzela */}
      <div className={`${styles.carousel} ${styles.whiteBackground}`}>
        <img className = {styles.carousel__image} src={imagePaths[0]} alt="fdafds" />
      </div>
      
      {/* Opis */}
      <div className={`${styles.information} ${styles.whiteBackground}`}>
        <h2>{name}</h2>
        <h3> {price} zł</h3>
        <hr />
        <p>{description}</p>
      </div>

    </div>
  )
}
