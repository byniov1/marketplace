import { FieldPacket } from "mysql2";

export interface CategoryEntity {
    id?: string;
    category_name: string;
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

export enum PRODUCT_CONDITION {
    NOWE = 'Nowe',
    UŻYWANE = 'Używane'
}

export interface ProductEntity {
    product_id? : string;
    product_name: string;
    description: string;
    price: number;
    city_name: string;
    pictures: string[];
    created_at: Date;
    product_condition: PRODUCT_CONDITION;
}

export interface ItemEntitySimplified extends Omit<ProductEntity, 'description'> {}