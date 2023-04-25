import { Router } from "express";
import { CategoryRecord } from "../records/category.record";

export const CategoryRouter = Router()

    .get('/', async (req, res) => {
        const categories = await CategoryRecord.findAll();
        res.json(categories)
    })

    .get('/:name', async(req, res) => {
        const category = await CategoryRecord.findOne(req.params.name)
        res.json(category)
    })