require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// import routes
var mainRouter = require('./routes/api');

var app = express();
const mongoose = require('mongoose');
var cors = require("cors");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// sessions
app.use(session({
  secret: 'cmc>pomona',   
  resave: false,
  saveUninitialized: true,
}));

// connect to db
const students_db = mongoose.createConnection(process.env.STUDENTS_DB, {useNewUrlParser: true});
students_db.on('error', (error) => console.error(error))
students_db.once('open', () => console.log('connected to students database'))

const questions_db = mongoose.createConnection(process.env.QUESTIONS_DB, {useNewUrlParser: true});
questions_db.on('error', (error) => console.error(error))
questions_db.once('open', () => console.log('connected to questions database'))

// use routes
app.use('/', mainRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
