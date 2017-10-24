var db = require('../config/db');

//match to DB stored procedure for new purchase
export function all() {
    return db.rows('getPurchases');
}

export function create(purchaseamount: number, purchaseid: string) {
    return db.row('insertPurchase', [purchaseamount, purchaseid])
}