let helper = require('mailgun').mail;
let mg = require ('mailgun')(process.env.MAILGUN_API_KEY);
//add receipt features to email 

// export function sendEmail(to: string, from: string, subject: string, content: args:[string,string]) {
//     var fromEmail = new helper.Email(from);
//     var toEmail = new helper.Email(to);
//     var content = new helper.Content('text/html', content);
//     var mail = new helper.Mail(fromEmail, subject, toEmail, content);
//     var request = mg.emptyRequest({
//         method: 'POST',
//         path: '/v3/mail/send',
//         body: mail.toJSON()
//     });
//     return mg.API(request);
// }