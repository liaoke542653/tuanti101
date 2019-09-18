<template>
    <div id="reg">
        <div class="reg1">
                 <el-form ref="form" :model="form" label-width="80px">
     <el-form-item label="用户名">
    <el-input v-model="form.name" placeholder="输入手机号或者邮箱"></el-input>
     </el-form-item>
     <el-form-item label="密码">
      <el-input v-model="form.pswd" placeholder="密码" type="password"></el-input>
    </el-form-item>
     </el-form>

     <button @click="reg">注册</button>
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
       reg(){
           var that=this
           that.axios.post('http://192.168.1.114:8888/addUser',{name:that.form.name,password:that.form.pswd}).then(function(response){
               window.console.log(response)
           })
       } 
    },
}
</script>

<style scoped>
 .reg1{
    width: 300px;
    height: 200px;
    position: absolute;
    top:200px;
    left: 600px;
    border: 1px solid black;
    padding: 20px 10px
 }
 button{
     width: 200px;
     height: 40px;
     background: #00F3FF;
     border: 1px solid #00F3FF
 }
</style>