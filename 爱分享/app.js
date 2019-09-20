const mysqltool=require('./mysqltool/mysqltool.js')
var express=require('express')
var app=express()
app.listen(8082)
//中间件
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    // console.log(req.query)
    next()
})

app.get("/management",function(req,res){
    //获取数据
    console.log(req.query)
    //连接数据库
    mysqltool.add(req.query)
    res.send('ok')
})
app.use(express.static(__dirname+"/management"))

app.get('/app.json',function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*")
    // console.log(req.query)
    mysqltool.get(res)
})

