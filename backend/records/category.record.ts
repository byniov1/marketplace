import { CategoryEntity, NewCategoryEntity, CategoriesRecordResult } from "../types";
import { pool } from "../utils/db";
import { ValidationError } from "../utils/errors";


export class CategoryRecord implements CategoryEntity {
    public id: string;
    public category_name: string;
    public picture: string

    constructor(obj: NewCategoryEntity){
        if(!obj.category_name || obj.category_name.length > 100){
            throw new ValidationError('Category name cannot be longer than 100 characters');
        }

        this.id = obj.id;
        this.category_name = obj.category_name
        this.picture = obj.picture
    }

    static async findCategoriesAndSubcategories(){
        const [results] = await pool.execute("SELECT Categories.id, Categories.category_name, Categories.picture, Subcategories.subcategory_name FROM Categories JOIN Subcategories on Subcategories.category_name = Categories.category_name ");
        return results
    }

    static async findCategories() {
        console.log('findCategories');
        
        const [results] = await pool.execute("SELECT Categories.id, Categories.category_name, Categories.picture, Subcategories.subcategory_name FROM Categories JOIN Subcategories on Subcategories.category_name = Categories.category_name ");
        // const [results] = await pool.execute("SELECT * FROM Categories");
        return results
    }

    static async findSubcategories(category_name: string){
        const [results] = await pool.execute("SELECT subcategory_name FROM Subcategories where category_name = :category_name", {
            category_name
        })
        console.log(results);
        

        return results;

    }


    // static async findSubcategories() {
    //     // console.log('findSubcategories');
        
    //     const [results] = await pool.execute("SELECT subcategory_name, category_name FROM Subcategories");
    //     return results
    // }

    /*
    static async findSubcategories(category_name: string) {
        console.log('findSubcategories', category_name);
        
        const [results] = await pool.execute("SELECT subcategory_name FROM Subcategories where category_name = :category_name", {
            category_name
        });
        return results
    }
    */


    //Można te 2 funckje połączyć w jedną 
    static async findProducts(category_name: string) {
        console.log('findProducts', category_name);
        
        const [results] = await pool.execute(`
            SELECT product_id, product_name, product_condition, created_at, default_picture, price, city_name FROM Products 
            WHERE category_name = :category_name`, {
            category_name
        })
        // console.log(results);

        return results
    }


    static async findSubcategoryProducts(category_name: string, subcategory_name: string,){
        // console.log('findSubcategoryProducts', subcategory_name);
        const [results] = await pool.execute(`
        SELECT product_id, product_name, product_condition, created_at, default_picture, price, city_name FROM Products 
        WHERE category_name = :category_name AND subcategory_name = :subcategory_name `, {
        category_name,
        subcategory_name
        })

        return results
    }

    


    //@TODO insert
}