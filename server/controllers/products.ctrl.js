"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const procedures = require("../procedures/product.proc");
let router = express.Router();
//display all misc
router.get('/', (req, res) => {
    procedures.all()
        .then((product) => {
        res.send(product);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
//display single misc
router.route('/:id')
    .get(function (req, res) {
    procedures.read(req.params.id)
        .then(function (singleProduct) {
        res.send(singleProduct);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});
exports.default = router;