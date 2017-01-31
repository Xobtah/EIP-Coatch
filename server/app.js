/**
 * Created by xobtah on 31/01/17.
 */

let server = require('http');
let express = require('express');
let app = express();

app.use(express.static('client'));
app.use('/node_modules', express.static('node_modules'));

app.listen(8080);