var mysql = require('mysql');
function mysql1(sql, callback) {

	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: '1905h5'
	});

	connection.connect();

	connection.query(sql, function(error, results, fields) {
		if (error) throw error;
		callback(results)
	});

	connection.end();

}

//往数据库添加
function add(newdata) {
	 var sql=`insert into xiaos (img,Title,author,describe1,update1) values ("${newdata.img}","${newdata.Title}","${newdata.author}","${newdata.describe1}","${newdata.update1}")`
	console.log(sql)
	 mysql1(sql,function(data) {
		console.log(data)
	})

}
//从数据库获取
function get(res){
	
	var sql=`SELECT * FROM xiaos `
	mysql1(sql,function(data){
		// console.log(data)
		res.send(data)
	})

}
//搜索
function sou1(S,res){
		let sql = `select * from xiaos where Title LIKE '%${S}%'`
	mysql1(sql,function(data){
		// console.log(data)
		res.send(data)
	})
	
}
//获取详情
function details(T,res){
	
	var sql=`select * from xiaoq where shum = '${T}'`
	mysql1(sql,function(data){
		console.log(data)
		res.send(data)
	})

}
//获得用户的书籍信息
function mybk(N,res){
	console.log(N)
	var sql=`select * from lk where name= '${N}'`
	mysql1(sql,function(data){
		console.log(data)
		res.send(data)
	})

}
const mysqltool={add,get,sou1,details,mybk}
module.exports=mysqltool



