import * as express from 'express';
import * as mailService from "../services/email.svc";
// var express = require('express');
// var mailService = require('../services/email.svc');

let router = express.Router();

router.post('/', (req, res) => {
    let content = `<h3>You have a new message from ${req.body.name}</h3>
                    <h5>From:${req.body.email}</h5>
                    <p>${req.body.message}</p>`;

    mailService.sendEmail('xcmdprompt@gmail.com', 'no-reply@customer.com', 'New Inquiry', content)
    .then((success: any) => {
        console.log(success);
        res.sendStatus(201);
    }).catch((err: any) => {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;
