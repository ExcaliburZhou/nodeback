var express             = require('express');
var morgan              = require('morgan');
var path                = require('path');
var FileStreamRotator   = require('file-stream-rotator');
var fs                  = require('fs');
var favicon             = require('serve-favicon');
var bodyParser          = require('body-parser');
var cookieParser        = require('cookie-parser');
var cors                = require('cors');
var app                 = express();
var http                = require('http').Server(app);
var io                  = require('socket.io')(http);
var session             = require('express-session');
var MongoStore          = require('connect-mongo')(session);

var router              = require('./routes/index');
var socket              = require('./socket/index');
var connection          = require('./data/database');

app.use(favicon(__dirname + '/public/use.ico'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: "excaliburTest",
    store: new MongoStore({url: 'mongodb://127.0.0.1:27017/test'}),
    resave: false,
    saveUninitialized: false,
    cookie: {path: '/', httpOnly: true, secure: false, maxAge: 1000 * 60 * 10}
}))
// 设置静态资源目录
app.use(express.static('public'));
app.use(express.static('uploads'));

// 请求日志输出
var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYY-MM-DD',
    filename: path.join(__dirname, 'log', 'access-%DATE%.log'),
    frequency: 'daily',
    verbose: false
});
app.use(morgan('combined', {
    stream: accessLogStream
}));

app.use(cors());



app.use('/', router);

socket(io);

var server = http.listen(3100, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
