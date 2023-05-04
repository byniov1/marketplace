import { ProductEntity } from "types";

function convertCategories(categories: any) {
    const result: any = [];

    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const existingCategory = result.find((c : any)=> c.category_name === category.category_name);

        if (existingCategory) {
            existingCategory.subcategories.push({ subcategory_name: category.subcategory_name });
        } else {
            result.push({
                category_id: category.id,
                category_name: category.category_name,
                picture: category.picture,
                subcategories: [{ subcategory_name: category.subcategory_name }]
            });
        }
    }

    return result;
}

export const fetchCategoriesAndSubcategories = async (functionToSaveData: React.Dispatch<React.SetStateAction<never[]>>) => {
    const response = await fetch(`http://localhost:9001/category`)
    let data = await response.json()

    data = convertCategories(data)
    // console.log(data);
    
    functionToSaveData(data)
}


export const fetchSubcategoriesForGivenCategory = async (name: string) => {
    const resposne = await fetch(`http://localhost:9000/category/${name}`)
    let data = await resposne.json();
    // console.log(data);
}

export const convertPhotos = (data: any) => {
    // data = Object.values(data)
    data.map((item: any) => item.pictures = item.pictures.split(','))
    // console.log(data);
    
    return data;
}


// export const fetchProductsAndSubcategories = async (
export const fetchProductsAndSubcategories = async (
    functionToSaveProducts: React.Dispatch<React.SetStateAction<never[]>>,
    functionToSaveSubcategories: React.Dispatch<React.SetStateAction<never[]>>,
    category: string | undefined,
) => {
    // console.log('fetchProductsAndSubcategories');

    const response = await fetch(`http://localhost:9001/category/${category}`)
    let data = await response.json();
    let {subcategories, products} = data
    
    // console.log(data);
    // data = Object.values(data)
    // data[0].map((item: any) => item.pictures = item.pictures.split(','))
    // products = convertPhotos(products)
    // products.map((item: any) => item.pictures = item.pictures.split(','))

    // console.log(products);
    // console.log(subcategories);
    
    
    functionToSaveProducts(prevState => prevState = products)
    functionToSaveSubcategories(prevState => prevState = subcategories)
} 



export const fetchSubcategoryProducts = async (
    functionToSaveProducts: React.Dispatch<React.SetStateAction<never[]>>,
    category: string | undefined,
    subcategory: string | undefined 
) => {

    // console.log('fetchSubcategoryProducts');
    

    const response = await fetch(`http://localhost:9001/category/${category}/${subcategory}`)
    let data = await response.json()
    // console.log(data);

    functionToSaveProducts(data)
}




export const fetchProduct = async (functionToSaveData: React.Dispatch<React.SetStateAction<ProductEntity[] | null>>, product_id: string | undefined) => {
    // console.log(`http://localhost:9001/product/${product_id}`)
    const response = await fetch(`http://localhost:9001/product/${product_id}`)
    let data = await response.json()

    data = Object.values(data)
    data.map((item: any) => item.pictures = item.pictures.split(','))

    // console.log(data);

    functionToSaveData(data)
}