import { FieldPacket } from "mysql2";

export interface CategoryEntity {
    id?: string;
    name: string;
    picture: string
}


export interface NewCategoryEntity extends Omit<CategoryEntity, 'id'> {
    id?: string;
}

export type CategoriesRecordResult = [CategoryEntity[], FieldPacket[]]


//FE
export interface CategoryEntityExtended extends CategoryEntity {
    to: string;
}

export interface ItemEntity {
    product_id? : string;
    product_name: string;
    description: string;
    price: number;
    pictures: string[];
}

export interface ItemEntitySimplified extends Omit<ItemEntity, 'description'> {}