//1,引入express
var express = require('express');
var app = express();
var path = require('path');
//2,引入的ejs插件
// var ejs = require('ejs');
//3,设置html引擎
app.set('view engine', 'html');
//4,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//5,设置ejs引擎
// app.engine('html', require('ejs').__express);
//6,静态文件
app.use(express.static('public'));

//7,引入body-parser模块

//8，创建 application/x-www-form-urlencoded 编码解析
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.send(200);
    }
    else {
      next();
    }
  });
//8引入cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());
//11  引入公共数据
let config = require('./Utils/config');
//引入index控制器
let controller = require('./Controllers/IndexController.js');
app.get('/index', controller.index);
app.post('/updateUser', controller.updateUser);
app.post('/shezUser', controller.shezUser);

//登录页面
let loginController = require('./Controllers/LoginController');
app.get('/login', loginController.login);
app.post('/checkUser', loginController.checkUser);

//注册页面
let registerController = require('./Controllers/RegisterController');
app.get('/registered', registerController.registered);
app.post('/addUser', registerController.addUser);

//上传图片
// let fileController = require('./Controllers/FileController');
// app.post("/uploadImgs", multer({
//     dest: __dirname + '/public/upload/imgs/'
// }).array('file'), fileController.upload);
app.listen(config.port,function(){
    console.log('服务器已启动..')
});