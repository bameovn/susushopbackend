var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var sanpham = require('./routes/sanpham');
var loaisanpham = require('./routes/loaisanpham');
var user = require('./routes/user');
var donhang = require('./routes/donhang');
var ctdonhang = require('./routes/ctdonhang');
var login = require('./routes/login');
var comment = require('./routes/comment');
var search = require('./routes/search');
var giohang = require('./routes/giohang');

var app = express();



app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api', sanpham);
app.use('/api', loaisanpham);
app.use('/api', user);
app.use('/api', donhang);
app.use('/api', ctdonhang);
app.use('/api', login);
app.use('/api', comment);
app.use('/api', search);
app.use('/api', giohang);



var server = app.listen(8081, function () {
    console.log('Listening on ' + server.address().port);
})


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
}
app.use(allowCrossDomain);


//app.use("/", router);


module.exports = app;
