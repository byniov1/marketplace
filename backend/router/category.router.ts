import { Router } from "express";
import { CategoryRecord } from "../records/category.record";

export const CategoryRouter = Router()

    .get('/', async (req, res) => {
        const categoriesAndSubcategories = await CategoryRecord.findCategoriesAndSubcategories();
        res.json(categoriesAndSubcategories)
    })
    
    .get('/:name' , async (req, res) => { 
        const subcategories = await CategoryRecord.findSubcategories(req.params.name)
        const products = await CategoryRecord.findProducts(req.params.name)

        const result = {subcategories, products}
        res.json(result)
    })

    .get('/:categoryName/:subcategoryName', async (req, res) => {
        const {categoryName, subcategoryName} = req.params
        const products = await CategoryRecord.findSubcategoryProducts(categoryName,subcategoryName)
        res.json(products)
    })