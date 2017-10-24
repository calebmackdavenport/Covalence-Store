"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require('../config/db');
function all() {
    return db.rows('getAllMisc');
}
exports.all = all;
function read(id) {
    return db.row('getProduct', [id]);
}
exports.read = read;
