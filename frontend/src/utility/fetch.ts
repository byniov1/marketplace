import { log } from "console";

interface ItemI {
    id?: string
    product_name: string;
    description: string;
    price: number;
}

export const fetchCategories = async (functionToSaveData: React.Dispatch<React.SetStateAction<never[]>>, category: string = '') => {
    console.log('fetchCategories');
    console.log(`http://localhost:9001/cat/${category}`);
    

    const response = await fetch(`http://localhost:9001/cat/${category}`)
    const data = await response.json()
    functionToSaveData(data)
}

export const fetchProduct = async (functionToSaveData: React.Dispatch<React.SetStateAction<ItemI[] | null>>, product_id: string | undefined) => {
    console.log('fetchProducts');
    const response = await fetch(`http://localhost:9001/product/${product_id}`)
    const data = await response.json()
    functionToSaveData(data)
}