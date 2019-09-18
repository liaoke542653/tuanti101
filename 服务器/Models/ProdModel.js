let SqlBase = require('./SqlBase');
class ProdModel extends SqlBase {
    constructor() {
        super();
    }
    select(callback) {
        //编写sql语句
        let sql = "select * from book1";

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
    sel(callback) {
        //编写sql语句
        let sql = "select * from book1";

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
    sele(callback) {
        //编写sql语句
        let sql = "select * from book2";

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
    selec(callback) {
        //编写sql语句
        let sql = "select * from book3";

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
    selecc(callback) {
        //编写sql语句
        let sql = "select * from book4 where typeid";

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
    seleccc(callback) {
        //编写sql语句
        let sql = "select * from xhwlist02";

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
    selecccc(typeid,callback) {
        //编写sql语句
        let sql = `select * from book4 where  typeid=${typeid}`;

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
    // selectById(id, callback) {
    //     //编写sql语句
    //     let sql = `select * from users where id=${id}`;

    //     //查询数据
    //     this.connection.query(sql, function (err, result) {
    //         if (err) {
    //             console.log(err.message);
    //             return;
    //         }

    //         callback(result);
    //     });
    // }
}

module.exports = ProdModel;