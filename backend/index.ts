import express, { Express, Request, Response, Router, json } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { ValidationError, handleError } from './utils/errors';
import { rateLimit } from 'express-rate-limit';
import { adRouter } from './router/ad.router';
import { CategoryRouter } from './router/category.router';
import { ProductRouter } from './router/product.router';

const app = express();


app.use(cors({
    origin: 'http://localhost:9000'
}))
app.use(json());
// app.use(rateLimit({
//     windowMs: 5 * 60 * 1000, // 15 minutes
//     max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// }));

app.get('/', async (req: Request,res: Response) => {
    res.send('Express + TypeScript Server' )
});

app.use('/category', CategoryRouter)
app.use('/product', ProductRouter)

// const router = Router();
// app.use('/api', router);
// router.use('/ad', adRouter);

app.use(handleError)

app.listen(9001, 'localhost', () => {
    console.log(`Server is running at http://localhost:9001 `);
})