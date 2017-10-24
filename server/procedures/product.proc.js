"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require('../config/db');
function all() {
    return db.rows('GetAllProducts');
}
exports.all = all;
function read(id) {
    return db.row('GetProduct', [id]);
}
exports.read = read;
