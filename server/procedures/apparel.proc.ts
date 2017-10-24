var db = require('../config/db');
import { rows } from '../config/db';

export function all(): Promise<Array<models.IProduct>>{
    return db.rows('GetAllApparel');
}
export function read(id: number): Promise<models.IProduct> {
    return db.row('GetApparel', [id]);
}