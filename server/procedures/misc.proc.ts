var db = require('../config/db');
import { rows, row } from '../config/db';

export function all(num: number): Promise<Array<models.IProduct>>{
    return rows('getMisc', [num]);
}
export function read(id: number): Promise<models.IProduct> {
    return row('getProduct', [id]);
}
export function readcat(id: number): Promise<models.ICat> {
    return row('getCategory', [id]);
}