import {join} from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
var prerender = require('prerender-node');
import stateRouting from './middleware/routing.mw';
import apiRouter from './api';

const clientPath = join(__dirname, '../client');

const app = express();

app.use(prerender);
app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api', apiRouter);
app.get('*', stateRouting);


app.listen(process.env.PORT || 3000, () => {
    console.log("listening");
});