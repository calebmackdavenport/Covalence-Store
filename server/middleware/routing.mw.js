"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
function stateRouting(req, res, next) {
    if (isServerAsset(req.url)) {
        next();
    }
    else {
        res.sendFile(path_1.join(__dirname, '../../client/index.html'));
    }
}
exports.default = stateRouting;
function isServerAsset(path) {
    var pieces = path.split('/');
    if (pieces.length == 0) {
        return false;
    }
    if (path.indexOf('/api') !== -1 || path.indexOf('/?') !== -1) {
        return true;
    }
    if (pieces[pieces.length - 1].indexOf(".") !== -1) {
        return true;
    }
    return false;
}
