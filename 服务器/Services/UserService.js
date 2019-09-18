//引入Usermodel
let UserModel = require('../Models/UserModel');
class UserService {
    constructor() {
        this.userModel = new UserModel();
    }
    checkUser(name,password,callback){
        let that=this
        let ob={
            msg:"用户不存在",
            code:-1
        }
    
    that.userModel.selectByName(name, function (users) {
        // console.log(name)
        if(users.length<=0){
            callback(ob);
            return;
        }
            // let user = users[0];
            //获得用户的密码
            ob.user=users
            if (users[0].password == password) {
                ob.msg = "用户合法";
                ob.code = 1;

              
            } else {
                ob.msg = "用户密码错误，请重新验证";
                ob.code = 0;
            }
            callback(ob);
                // ob.msg = "用户已存在";
                // ob.code = 1; 
                // callback(ob);
                return;

    });

}
addUser(name, password, callback) {

    let ob = {
        msg: "用户存在",
        code: -1
    }

    let that = this;


    that.userModel.selectByName(name, function (users) {
        //如果根据名字查询的用户已经存在，就给用户返回【用户已经存在】
        if (users.length >= 1) {
            callback(ob);
            return;
        }
        //如果用户不存在，就插入新用户
        that.userModel.insertUser(name, password, function (data) {
            console.log(44);
            ob.msg = "注册成功";
            ob.code = 1;
            callback(ob);
        });


    });
}


}































module.exports = UserService;