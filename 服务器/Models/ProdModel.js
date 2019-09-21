let SqlBase = require('./SqlBase');
class ProdModel extends SqlBase {
    constructor() {
        super();
    }
    select(callback) {
        //编写sql语句
        let sql = "SELECT * FROM imglist ORDER BY RAND() LIMIT 20 ";

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
    select1(id,callback) {
        //编写sql语句
        var sql=`select * from imglist where sid = '${id}'`;

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
     //查询用户
     selectByName(name, callback) {
        //编写sql语句
        let sql = `select * from users where name="${name}"`;
        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }
    update(name,password,id,title,nickname,call) {
        //4,编写sql语句
        let sql = `UPDATE users SET name ='${name}',password = '${password}',title = '${title}',nickname = '${nickname}' WHERE id = '${id}'`;
        //5，更新操作
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }
    //设置用户信息
    shez(name,id,title,nickname,callback) {
        //编写sql语句
        console.log('成了',title,nickname)
        var sql=`update users SET title="${title}",nickname="${nickname}" WHERE id = '${id}' `
        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }
    
}

module.exports = ProdModel;