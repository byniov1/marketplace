import { Router } from "express";
import { ProductRecord } from "../records/product.router";

export const ProductRouter = Router()

    .get('/:id', async(req, res) => {
        const category = await ProductRecord.findOneItem(req.params.id)
        res.json(category)
    })

    