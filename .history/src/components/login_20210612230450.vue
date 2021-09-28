<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../image/jr.jpg">
      </div>
      <!-- 登录表单区域 -->
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" show-password></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="success" round @click="login()">登录</el-button>
          <el-button type="primary" round @click="register()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loginForm:{
        username:'',
        password:''
      },
      rules:{
        username:[{required:true,message:'请输入用户名',trigger:'blur'}],
        password:[{required:true,message:'请输入密码',trigger:'blur'}],
        usergroup:[]
      }
    }
  },
  methods:{
    // 点击登录
    login(){
      console.log(this.loginForm.username)
      let flag=0;
      this.$refs.loginFormRef.validate(valid=>{
        if(!valid){
          this.$message({showClose:true,message:'请输入正确的账号密码',type:'error'})
          return;
        }
        flag=1;
      })
      if(flag){
        for(var item in this.userGroup){
          if(this.loginForm.username==this.userGroup[item].username&&this.loginForm.password==this.userGroup[item].password){
          localStorage.loginUser=JSON.stringify(this.userGroup[item]);
          localStorage.userGroup=JSON.stringify(this.userGroup);
          this.$router.push({ path:'/home' });
          this.$message({showClose: true,message: '登陆成功',type: 'success'});
          return ;
        }
        this.$message({showClose: true,message: '账号或密码错误！！！请输入正确的账号密码',type: 'error'});
      }
      
      
      }
    },
    // 点击注册
    register(){
      this.$router.push({path:'/register'})
    },
    oldMessage(){
            if(!window.localStorage) return;
            let a=JSON.parse(localStorage.userGroup);
            this.userGroup=a;
            }
      },
      mounted(){
            if(!window.localStorage) return;
            if(localStorage.userGroup == null)return;
            //如果之前有任何人注册过的话,调用oldMessage方法，初始化用户组
            // this.oldMessage();
      }
}
</script>

<style Lang="less" scoped>
.login_container{
  background: url("../image/bg.jpg");
  height: 100%;
}
.login_box{
  height: 300px;
  width: 450px;
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.login_box .avatar_box{
  height: 130px;
  width: 130px;
  border:1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
}
.avatar_box img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
}

.login_form{
  position: absolute;
  bottom:0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns{
  display: flex;
  justify-content: flex-end;
}
</style>