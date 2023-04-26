import { ItemEntity } from "types";

export const fetchCategories = async (functionToSaveData: React.Dispatch<React.SetStateAction<never[]>>, category: string = '') => {
    // console.log('http://localhost:9001/cat');
    const response = await fetch(`http://localhost:9001/cat/${category}`)
    let data = await response.json()
    
    functionToSaveData(data)
}

export const fetchProducts = async (functionToSaveData: React.Dispatch<React.SetStateAction<never[]>>, category: string | undefined) => {
    // console.log(`http://localhost:9001/cat/${category}`);
    const response = await fetch(`http://localhost:9001/cat/${category}`)
    let data = await response.json()
    
    data = Object.values(data)
    data.map((item:any) => item.pictures = item.pictures.split(','))
    // console.log(data);
    
    
    functionToSaveData(data)
}

export const fetchProduct = async (functionToSaveData: React.Dispatch<React.SetStateAction<ItemEntity[] | null>>, product_id: string | undefined) => {
    // console.log(`http://localhost:9001/product/${product_id}`)
    const response = await fetch(`http://localhost:9001/product/${product_id}`)
    const data = await response.json()
    functionToSaveData(data)
}