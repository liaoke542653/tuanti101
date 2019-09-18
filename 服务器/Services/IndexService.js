//引入Usermodel
// let UserModel = require('../Models/UserModel');
    let UserService = require('./UserService');
class IndexService {
    constructor() {
        this.userModel = new UserModel();
         this.userService = new UserService();

    }

    checkUser(name,passwd, callback) {
        // console.log(this)
        // let ob = {
        //     code: -1
        // }

        // if (user == null) {
        //     //客户端根本就没有提供任何数据，用户需要先到登录页面进行登录
        //     callback(ob);
        //     return;
        // }
        //引入UserService
       
        //创建对象
        // let userService = new UserService();
        //验证用户
        this.userService.checkUser(name, passwd, function (ob) {
            callback(ob);
        });
    }

}

module.exports = IndexService;