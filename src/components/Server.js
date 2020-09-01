import * as express from "express";

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//Route setupapp.get('/', (req, res) => {    res.send('root route');

//Start serverapp.listen(port, (req, res) => {
console.log(`server listening on port: ${port}`)