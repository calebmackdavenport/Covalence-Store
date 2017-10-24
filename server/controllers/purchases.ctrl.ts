import * as express from 'express';
import * as procedures from '../procedures/purchase.proc';

let router = express.Router();

/*
router.get('/', (req, res) => {
        procedures.all()
        .then((product) => {
            res.send(product);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    });
*/

router.get('/', (req, res) => {
        procedures.all()
        .then((products) {
            res.send(products);
        }).catch((err) {
            console.log(err);
            res.sendStatus(500);
        });
    })
//post cart items to db
    .post(function(req, res) {
        //must match front end
        procedures.create(req.body.productid, req.body.purchaseid)
        .then(function(id) {
            res.status(201).send(id);
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        })
    })
//delete item from cart
    .delete(function(req, res) {
        procedures.destroy(req.params.id)
    .then(function() {
        res.sendStatus(204);
    }).catch(function(err) {
        console.log(err);
        res.sendStatus(500);
        });
    });


export default router;