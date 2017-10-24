import * as express from 'express';
import * as procedures from '../procedures/purchase.proc';

let router = express.Router();


// get all purchases
router.get('/', (req, res) => {
        procedures.all()
        .then((purchase: any) => {
            res.send(purchase);
        }).catch((err: any) => {
            console.log(err);
            res.sendStatus(500);
        });
    })

    //post cart items to db
    .post('/', (req, res) => {
        procedures.create(req.body.productid, req.body.purchaseid)
        .then((id: number) => {
            res.status(201).send(id);
        }).catch((err: any) => {
            console.log(err);
            res.sendStatus(500);
        })
    })

    //delete items from cart
    // .delete('/', (req, res) => {
    //     procedures.destroy(req.params.id)
    //     .then(() => {
    //     res.sendStatus(204);
    //     }).catch((err: any) => {
    //         console.log(err);
    //         res.sendStatus(500);
    //     })
    // })


export default router;