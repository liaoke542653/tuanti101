 //引入SliderModel模块
 let ProdModel = require('../Models/ProdModel');
 class ProdService {
     constructor() {
         //创建轮播的对象
         this.pro = new ProdModel();
         this.pro1 = new ProdModel();
     }

update(name,password,id,img,title,nickname,call) {
        this.pro1.update(name,password,id,img,title,nickname ,res=>{
            this.pro1.selectByName(name,res=>{
                call(res)
            })
        })
    }
    
   
    shez(name,id,title,nickname,call) {
        console.log(666,title,nickname)
        this.pro1.shez(name,id,title,nickname ,res=>{
            this.pro1.selectByName(name,res=>{
                
                call(res)
            })
        })
    }
 

}

 module.exports = ProdService;