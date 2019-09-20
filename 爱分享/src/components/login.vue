<template>
    <div id="login">
        <div class="login1">
            <a href="#">爱分享</a>
  <div class="inp">
           <el-form ref="form" :model="form" label-width="100px">
  <el-form-item label="用户名">
    <el-input v-model="form.name" placeholder="输入手机号或者邮箱"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="form.pswd" placeholder="密码" type="password"></el-input>
  </el-form-item>
  </el-form>
  </div>
 <el-row class="but">
  <el-button type="primary" @click="log1">登录</el-button>
   <el-button type="info" @click="reg1">注册</el-button>
</el-row>
    </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          pswd: '',
        }
      }
    },
    methods: {
        
        log1(){
            let that=this
           window.console.log(that.form.name)
           if(that.form.name==''||that.form.pswd==''){
             alert('用户名或密码不能为空')
           }else{
         that.axios.post(`${this.$store.state.ip}/checkUser`,{name:that.form.name,pswd:that.form.pswd}).then(function(response){
            window.console.log(response)
            if(response.data.code==1){
              alert('登录成功')
              that.$store.commit("userInfo",response.data.user)
              // window.console.log(that.$store.state)
              // window.console.log(response.data.user[0].id)
              that.$router.push('./shez')
            }else if(response.data.code==-1){
              alert('账号不存在')
            }else{
              alert('密码错误')
            }
            
         })
         }
        },
        reg1(){
          this.$router.push('./regist')
        }
    }
  }
</script>

<style scoped>
.login1{
    width: 300px;
    height: 400px;
    position: absolute;
    top:200px;
    left: 600px;
    /* background: greenyellow; */
    border: 1px solid black
}

a{
  text-decoration: none;
  position: absolute;
  top:20px;
  left: 120px;
}
.inp{
  position: absolute;
  top: 60px
}
.but{
  position: absolute;
  top:200px;
  left:80px ;
}
</style>