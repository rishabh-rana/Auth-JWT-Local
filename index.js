const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const morgan = require("morgan");
const router = require('./router');

mongoose.connect('mongodb://rana:rana@ds255309.mlab.com:55309/authserver');
const app = express();

app.use(bodyParser.json({type: '*/*'}));
// app.use(morgan('combined'));

router(app);



app.listen(process.env.PORT || 3090);
