var db = require('../config/db');

//match to DB stored procedure for new purchase
export function create(purchaseamount: number, purchaseid: number) {
    return db.row('InsertPurchase', [purchaseamount, purchaseid])
}