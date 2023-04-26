import { log } from "console";
import { CategoryEntity, NewCategoryEntity, CategoriesRecordResult } from "../types";
import { pool } from "../utils/db";
import { ValidationError } from "../utils/errors";


export class CategoryRecord implements CategoryEntity {
    public id: string;
    public name: string;
    public picture: string

    constructor(obj: NewCategoryEntity){
        if(!obj.name || obj.name.length > 100){
            throw new ValidationError('Category name cannot be longer than 100 characters');
        }

        this.id = obj.id;
        this.name = obj.name
        this.picture = obj.picture
    }

    static async findAllCategories() {
        const [results] = await pool.execute("SELECT * FROM Categories");
        return results
    }


    static async findCategory(name: string) {
        const [results] = await pool.execute("SELECT name, pictures, price FROM Products JOIN Categories ON Products.category_id = Categories.id WHERE Categories.name = :name", {
            name
        })
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