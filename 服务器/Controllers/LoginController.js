
//引入用户模块
let UserService = require('../Services/UserService');
module.exports.login = function (req, res) {
    res.render('login', {});
}

module.exports.checkUser = function (req, res) {

    //解析提交数据
    let name = req.body.name;
    let password = req.body.pswd;
    //创建业务对象
    let userService = new UserService();
    //验证用户是否合法
    userService.checkUser(name, password, function (ob) {
        console.log(ob)
        res.json(ob);
    });

}