let IndexService = require('../Services/IndexService');
let ProdService =require('../Services/ProdService')
module.exports.index = function (req, res) {   
    //从cookies里面获得数据
    // let user = req.cookies.user;
    //创建业务逻辑对象 
    let name=req.body.name
    let passwd=req.body.passwd
    console.log(name)
    let indexService = new IndexService();
    //验证用户是否存在
    indexService.checkUser(name,passwd, function (ob) {
        res.json(ob)      
    });

}
module.exports.pro = function (req, res) {
    //创建对象 
    let prod = new ProdService();
    //获得新产品的数据
    prod.getPro(function (ob) {
        res.json(ob);
    });

}
module.exports.pro1 = function (req, res) {
    //创建对象 
    let prod = new ProdService();
    //获得新产品的数据
    prod.getPro1(function (ob) {
        res.json(ob);
    });

}
module.exports.pro2 = function (req, res) {
    //创建对象 
    let prod = new ProdService();
    //获得新产品的数据
    prod.getPro2(function (ob) {
        res.json(ob);
    });
}
module.exports.pro3 = function (req, res) {
    //创建对象 
    let prod = new ProdService();
    //获得新产品的数据
    prod.getPro3(function (ob) {
        res.json(ob);
    });
}
module.exports.pro4 = function (req, res) {
    //创建对象 
    let prod = new ProdService();
    //获得新产品的数据
    prod.getPro4(function (ob) {
        res.json(ob);
    });
}
module.exports.pro5 = function (req, res) {
    //创建对象 
    let prod = new ProdService();
    //获得新产品的数据
    prod.getPro5(function (ob) {
        res.json(ob);
    });
}
module.exports.pro6 = function (req, res) {
    let typeid = req.body.typeid;
    //创建对象 
    let prod = new ProdService();
    //获得新产品的数据
    prod.getPro6(function (ob) {
        res.json(ob);
    });
}