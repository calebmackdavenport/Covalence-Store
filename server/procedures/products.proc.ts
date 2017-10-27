var db = require('../config/db');
import { rows, row } from '../config/db';

export function all(): Promise<Array<models.IProduct>>{
    return rows('getAllProducts');
}
export function read(id: number): Promise<models.IProduct> {
    return row('getProduct', [id]);
}
export function categoryread(categoryid: number): Promise<Array<models.IProduct>> {
    return rows('getProductByCatId', [categoryid]);
}

