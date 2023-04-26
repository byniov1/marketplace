import { log } from "console";
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

    static async findAllCategories() {
        const [results] = await pool.execute("SELECT * FROM Categories");
        return results
    }


    static async findCategory(name: string) {
        const [results] = await pool.execute(`
            SELECT product_id, product_name, product_condition, created_at, pictures, price, city_name FROM Products 
            JOIN Categories ON Products.category_name = Categories.category_name 
            WHERE Categories.category_name = :name`, {
            name
        })
        
        console.log(results);
        

        return results
    }

    static async findOneItem(id: string) {
        const [results] = await pool.execute("SELECT * FROM Products WHERE product_id = :id", {
            id
        })
        // console.log(results);
        
        return results
    }

    //@TODO insert
}