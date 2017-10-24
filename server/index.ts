import {join} from 'path';
import * as express from 'express';

const clientPath = join(__dirname, '../client');

const app = express();

app.use(express.static(clientPath));

app.listen(process.env.PORT || 3000, () => {
    console.log("listening");
});