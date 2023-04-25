import { Router } from "express";
import { CategoryRecord } from "../records/category.record";

export const ProductRouter = Router()

    .get('/:id', async(req, res) => {
        const category = await CategoryRecord.findOneItem(req.params.id)
        res.json(category)
    })