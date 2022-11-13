var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use('/static', express.static("public"));