import { FieldPacket } from "mysql2";

export interface CategoryEntity{
    id: string;
    name: string;
} 

export interface NewCategoryEntity extends Omit<CategoryEntity, 'id'> {
    id?: string;
}

export type CategoriesRecordResult = [CategoryEntity[], FieldPacket[]]