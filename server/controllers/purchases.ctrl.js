"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const procedures = require("../procedures/purchase.proc");
let router = express.Router();
// get all purchases
router.get('/', (req, res) => {
    procedures.all()
        .then((purchase) => {
        res.send(purchase);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
})
    .post('/', (req, res) => {
    procedures.create(req.body.productid, req.body.purchaseid)
        .then((id) => {
        res.status(201).send(id);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
//delete items from cart
// .delete('/', (req, res) => {
//     procedures.destroy(req.params.id)
//     .then(() => {
//     res.sendStatus(204);
//     }).catch((err: any) => {
//         console.log(err);
//         res.sendStatus(500);
//     })
// })
exports.default = router;
