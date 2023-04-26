import { Router } from "express";
import { CategoryRecord } from "../records/category.record";

export const CategoryRouter = Router()

    .get('/', async (req, res) => {
        const categories = await CategoryRecord.findAllCategories();
        res.json(categories)
    })

    .get('/:name', async(req, res) => {
        const category = await CategoryRecord.findCategory(req.params.name)
        res.json(category)
    })