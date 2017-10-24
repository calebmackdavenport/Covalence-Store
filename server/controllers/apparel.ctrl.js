"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const procedures = require("../procedures/apparel.proc");
let router = express.Router();
//display all products
router.get('/', (req, res) => {
    procedures.all()
        .then((apparel) => {
        res.send(apparel);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
//display single page product
router.route('/:id')
    .get(function (req, res) {
    procedures.read(req.params.id)
        .then(function (singleApparel) {
        res.send(singleApparel);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});
exports.default = router;