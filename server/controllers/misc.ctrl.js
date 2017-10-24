"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const procedures = require("../procedures/misc.proc");
let router = express.Router();
//display all misc
router.get('/', (req, res) => {
    procedures.all()
        .then((misc) => {
        res.send(misc);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
//display single misc
router.route('/:id')
    .get(function (req, res) {
    procedures.read(req.params.id)
        .then(function (singleMisc) {
        res.send(singleMisc);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});
exports.default = router;
