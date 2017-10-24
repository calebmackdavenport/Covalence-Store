"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let helper = require('mailgun').mail;
let mg = require('mailgun')(process.env.MAILGUN_API_KEY);
//add receipt features to email 
function sendEmail(to, from, subject, content) {
    var fromEmail = new helper.Email(from);
    var toEmail = new helper.Email(to);
    var content = new helper.Content('text/html', content);
    var mail = new helper.Mail(fromEmail, subject, toEmail, content);
    var request = mg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });
    return mg.API(request);
}
exports.sendEmail = sendEmail;
