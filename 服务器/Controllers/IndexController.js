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

module.exports.updateUser = function (req, res) {
    let name = req.body.name;
    let password = req.body.password;
    let title = req.body.title;
    let nickname = req.body.nickname;
    let id = req.body.id
    let prodService = new ProdService();
    prodService.update(name, password, id,title,nickname, ob => {
        res.json(ob)
    })
}
module.exports.shezUser = function (req, res) {
    let name = req.body.name;
    let title = req.body.title;
    let nickname = req.body.nickname
    let id = req.body.id
    let prodService = new ProdService();
    prodService.shez(name,id,title,nickname, ob => {
        res.json(ob)
    })
}
