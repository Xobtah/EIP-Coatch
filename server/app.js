/**
 * Created by xobtah on 31/01/17.
 */

let server = require('http');
let express = require('express');
let app = express();

app.use(express.static('client'));

app.listen(8080);