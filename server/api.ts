import * as express from 'express';
import apparel from './controllers/apparel.ctrl';
import categories from './controllers/categories.ctrl';
import checkout from './controllers/checkout.ctrl';
import contact from './controllers/contact.ctrl';
import misc from './controllers/misc.ctrl';
import products from './controllers/products.ctrl';
import purchases from './controllers/purchases.ctrl';




let router = express.Router();

router
    .use('/apparel', apparel)
    .use('/categories', categories)
    .use('/checkout', checkout)
    .use('/contact', contact)
    .use('/misc', misc)
    .use('/products', products)
    .use('/purchases', purchases)

export default router;