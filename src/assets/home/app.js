var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const reactBuildPath = path.join(__dirname, 'react/dist');


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/memo', express.static(reactBuildPath));

app.get('/memo/*', (req, res) => {
  res.sendFile(path.join(reactBuildPath, 'index.html'));
});


app.use(function(req, res, next) { //404 error handler
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

app.listen(8000, '0.0.0.0', () => {
  console.log('서버 실행 중: http://<서버 IP>:8000');
});

module.exports = app;
