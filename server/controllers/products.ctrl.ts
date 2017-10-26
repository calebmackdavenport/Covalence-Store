import * as express from 'express';
import * as procedures from "../procedures/products.proc";

let router = express.Router();

//display all misc
router.get('/', (req, res) => {
        procedures.all()
        .then((product) => {
            res.send(product);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    });

    router.get('/categories/:id', (req, res) => {
        procedures.categoryread(req.params.id)
        .then((product) => {
            res.send(product);
            console.log("test");
        }).catch((e) => {
            console.log(e);
            res.sendStatus(500);
        });
    });

//display single misc

router.get('/:id', (req, res) => {
    procedures.read(req.params.id)
    .then((product) => {
        res.send(product);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

export default router;