 //引入SliderModel模块
 let ProdModel = require('../Models/ProdModel');
 class ProdService {
     constructor() {
         //创建轮播的对象
         this.pro = new ProdModel();
         this.pro1 = new ProdModel();
     }

     getPro(callback) {
         this.pro.select(function (ourservice) {
            // console.log(lmw1)
             callback(ourservice);
         })
     }
     getPro1(callback) {
        this.pro1.sel(function (ourservice) {
           // console.log(lmw1)
            callback(ourservice);
        })
    }
    getPro2(callback) {
        this.pro1.sele(function (ourservice) {
           // console.log(lmw1)
            callback(ourservice);
        })
    }
    getPro3(callback) {
        this.pro1.selec(function (ourservice) {
           // console.log(lmw1)
            callback(ourservice);
        })
    }
    getPro4(callback) {
        this.pro1.selecc(function (ourservice) {
           // console.log(lmw1)
            callback(ourservice);
        })
    }
    getPro5(callback) {
        this.pro1.seleccc(function (ourservice) {
           // console.log(lmw1)
            callback(ourservice);
        })
    }
    getPro6(callback) {
        let arr=[]
        let that=this
        this.pro1.selecccc(1,function (ourservice) {
            console.log(121212)
           // console.log(lmw1)
           arr.push(ourservice)
            that.pro1.selecccc(2,function(ourservice){
                arr.push(ourservice)
                callback(arr);
            })
            
        })
    }
 }

 module.exports = ProdService;