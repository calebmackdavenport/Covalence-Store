"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const stripeSvc = require("../services/stripe.svc");
const mailService = require("../services/email.svc");
const procedures = require("../procedures/purchase.proc");
let router = express.Router();
router.post('/', (req, res) => {
    stripeSvc.charge(req.body.token, req.body.amount)
        .then(function (response) {
        console.log(response);
        // TODO test if response.id or req.body.customer (provides: string | customers.ICustomer;)
        return procedures.create(req.body.amount, req.body.customer);
    })
        .then(function (response) {
        let content = `<h3>Thank you for shopping with Covalence</h3>`;
        //gets all of the products you've purchased
        for (var i = 0; i < req.body.products.length; i++) {
            content += `<p>${req.body.products[i].title} - $${req.body.products[i].price}</p>`;
        }
        // adding underline to separate total from items
        content += `<p>_________________________</p>
                   <p>Your total:$ ${req.body.amount}</p>`;
        return mailService.sendEmail(req.body.email, 'no-reply@covalencemerch.io', 'Your Covalence Receipt', content);
    })
        .then((response) => {
        res.status(201).send(response);
    })
        .catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});
exports.default = router;
