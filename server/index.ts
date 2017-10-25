import {join} from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
var routing = require('./middleware/routing.mw');
var api = require('./api');
var prerender = require('prerender-node');


const clientPath = join(__dirname, '../client');

const app = express();

app.use(prerender);
app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', api);
app.get('*', routing.stateRouting);


app.listen(process.env.PORT || 3000, () => {
    console.log("listening");
});