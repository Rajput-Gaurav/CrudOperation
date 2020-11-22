const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');

const postRouter = require('./postRoute');

// Connection to the DB:
mongoose.connect("http://mongodb://localhost:27017/FormData",
{ useNewUrlParser: true},
 (err)=> {
     if(!err) {
         console.log("DB Connected.");
     }
 });

 const app = express();

 app.use(logger('dev'));
 app.use(cors);

 app.use(bodyParser.urlencoded({ extended: false}));
 app.use(bodyParser.json());

//  mount the router:
app.use("/posts", postRouter);

 module.exports = app;