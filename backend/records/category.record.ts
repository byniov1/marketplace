import { CategoryEntity, NewCategoryEntity, CategoriesRecordResult } from "../types";
import { pool } from "../utils/db";
import { ValidationError } from "../utils/errors";

// import {CategoryEntity} from '../types'

export class CategoryRecord implements CategoryEntity {
    public id: string;
    public name: string;

    constructor(obj: NewCategoryEntity){
        if(!obj.name || obj.name.length > 100){
            throw new ValidationError('Category name cannot be longer than 100 characters');
        }

        this.id = obj.id;
        this.name = obj.name
    }

    static async findAll(): Promise<CategoryEntity[] | null>{
        const [results] = await pool.execute("SELECT * FROM Categories") as CategoriesRecordResult;
        return results
    }

    static async findOne(name: string) {
        const [results] = await pool.execute("SELECT * FROM Products JOIN Categories ON Products.category_id = Categories.id WHERE Categories.name = :name", {
            name
        })

        return results
    }

    //@TODO insert
}