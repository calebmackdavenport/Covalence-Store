"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const categories_ctrl_1 = require("./controllers/categories.ctrl");
// import products from './controllers/products.ctrl';
// import purchases from './controllers/purchases.ctrl';
// import PurchasesProducts from './controllers/purchasesProducts.ctrl'
let router = express.Router();
router
    .use('/categories', categories_ctrl_1.default);
// .use('/products', products)
// .use('/purchases', purchases)
// .use('/purchasesProducts', PurchasesProducts)
exports.default = router;
