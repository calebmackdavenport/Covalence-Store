"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const express = require("express");
const clientPath = path_1.join(__dirname, '../client');
const app = express();
app.use(express.static(clientPath));
app.listen(process.env.PORT || 3000, () => {
    console.log("listening");
});
