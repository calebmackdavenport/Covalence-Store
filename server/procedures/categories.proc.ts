import { rows, row } from '../config/db';

export function all(): Promise<Array<models.ICat>> {
   return rows('getCategories');
}
export function read(id: number): Promise<models.ICat> {
    return row('getCategory', [id]);
}