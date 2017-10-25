"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require('../config/db');
//match to DB stored procedure for new purchase
function all() {
    return db.rows('getPurchases');
}
exports.all = all;
function create(purchaseamount, purchaseid) {
    return db.row('insertPurchase', [purchaseamount, purchaseid]);
}
exports.create = create;
