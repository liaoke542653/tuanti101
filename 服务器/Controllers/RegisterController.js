//引入用户模块
let UserService = require('../Services/UserService');
module.exports.registered = function (req, res) {
    res.render('registered', {});
}

module.exports.addUser = function (req, res) {
    console.log(12345)
    //解析提交数据
    let name = req.body.name;
    let password = req.body.password;
    //创建业务对象
    let userService = new UserService();
    //验证用户是否合法
    userService.addUser(name, password, function (ob) {
        console.log(password)
        res.json(ob);
    });

}