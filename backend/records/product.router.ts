import { pool } from "../utils/db";

export class ProductRecord {

    static async findOneItem(id: string) {
        console.log('findOneItem', id);
        
        const [results] = await pool.execute("SELECT * FROM Products WHERE product_id = :id", {
            id
        })
        // console.log(results);
        
        return results
    }
}
