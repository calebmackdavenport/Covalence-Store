var db = require('../config/db');
import { rows } from '../config/db';

export function all(num: number): Promise<Array<models.IProduct>>{
    return db.rows('getApparel');
}
export function read(id: number): Promise<models.IProduct> {
    return db.row('getProduct', [id]);
}