import { rows } from '../config/db';

export function all(): Promise<Array<models.ICat>> {
   return rows('GetCategories');
}