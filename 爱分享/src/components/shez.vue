<template>
    <div class="shez">
        <div class="shez1">
               <div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" ref="formLabelAlign" >
  <!-- <el-form-item label="用户名" prop="name">
    <el-input v-model="formLabelAlign.name" class="inp"></el-input>
  </el-form-item> -->
  <el-form-item label="昵称:" prop="nickname">
    <el-input   v-model="formLabelAlign.nickname" class="inp"></el-input>
  </el-form-item>
  <el-form-item label="简介:" prop="title">
    <el-input  v-model="formLabelAlign.title" class="inp"></el-input>
  </el-form-item>
</el-form>
<el-button type="primary" @click="submitForm('formLabelAlign')">提交</el-button>
<el-button @click="chongz('formLabelAlign')">重置</el-button>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        user:{},
         labelPosition: 'right',
        formLabelAlign: {
          title: '',
          nickname:''
        }
      };
    },
    methods: {
      chongz(formName){
        this.$refs[formName].resetFields();
    },
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
           window.console.log(this.formLabelAlign.title)
           this.axios.post(`${this.$store.state.ip}/shezUser`,{name:this.formLabelAlign.name,id:this.user.id,title:this.formLabelAlign.title,nickname:this.formLabelAlign.nickname}).then(function(response){
             window.console.log(response)
             alert('设置成功')
           })
          } else {
           window.console.log('error submit!!');
            return false;
          }
        });
    }
    },
    mounted() {
      this.user = this.$store.state.user;
      window.console.log(this.user)
    },
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  .inp{
      width: 200px
  }
  .shez1{
      position: absolute;
      width: 400px;
      height: 200px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin:  auto;
      border: 1px solid black
  }
</style>