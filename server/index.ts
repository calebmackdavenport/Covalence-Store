import {join} from 'path';
import * as express from 'express';

const clientPath = join(__dirname, '../client');

const app = express();

app.use(express.static(clientPath));

console.log(process.env.PORT || 3000);
app.listen(3000, () => {
    console.log("listening on 3k");
});