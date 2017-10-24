"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const apparel_ctrl_1 = require("./controllers/apparel.ctrl");
const categories_ctrl_1 = require("./controllers/categories.ctrl");
const checkout_ctrl_1 = require("./controllers/checkout.ctrl");
const contact_ctrl_1 = require("./controllers/contact.ctrl");
const misc_ctrl_1 = require("./controllers/misc.ctrl");
const products_ctrl_1 = require("./controllers/products.ctrl");
const purchases_ctrl_1 = require("./controllers/purchases.ctrl");
let router = express.Router();
router
    .use('/apparel', apparel_ctrl_1.default)
    .use('/categories', categories_ctrl_1.default)
    .use('/checkout', checkout_ctrl_1.default)
    .use('/contact', contact_ctrl_1.default)
    .use('/misc', misc_ctrl_1.default)
    .use('/products', products_ctrl_1.default)
    .use('/purchases', purchases_ctrl_1.default);
exports.default = router;
