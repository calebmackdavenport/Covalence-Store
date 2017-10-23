import * as express from 'express';
import categories from './controllers/categories.ctrl';
// import products from './controllers/products.ctrl';
// import purchases from './controllers/purchases.ctrl';
// import PurchasesProducts from './controllers/purchasesProducts.ctrl'

let router = express.Router();

router
    .use('/categories', categories);
    // .use('/products', products)
    // .use('/purchases', purchases)
    // .use('/purchasesProducts', PurchasesProducts)

export default router;