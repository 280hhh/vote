<template>
  <div class="register_container">
    <div class="register_box">
      <!-- 注册表单区域 -->
      <el-form ref="registerFormRef" :model="registerForm" label-width="80px" :rules="registerRules" class="register_form">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="registerForm.username"></el-input>
                </el-form-item>
                <el-form-item label="e-mail" prop="email">
                    <el-input v-model="registerForm.email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="registerForm.password" show-password></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPassword">
                    <el-input v-model="registerForm.checkPassword" show-password></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="phoneNumber">
                    <el-input v-model="registerForm.phoneNumber"></el-input>
                </el-form-item>
                <el-form>
                <div class="btns">
                    <el-button type="primary" @click="onSubmit()" round>注册</el-button>
                    <el-button @click="resetForm()" round>重置</el-button>
                </div>
                </el-form>
            </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      registerForm:{
        username:'',
        email:'',
        password:'',
        checkPassword:'',
        phoneNumber:''
      }
    }
  }
}
</script>

<style>
.register_container{
  background: url("../image/bg.jpg");
  height: 100%;
}
.register_box{
  height: 600px;
  width: 500px;
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.register_form{
  position: absolute;
  bottom:0;
  width: 60%;
  padding: 0 30px;
  box-sizing: border-box;
}

.btns{
  display: flex;
  justify-content: flex-end;
}
</style>