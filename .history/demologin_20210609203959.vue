<template>
    <div class="body">
    <div class="main">  
        <div class="userphoto"><img src="../assets/头像.jpg"></div>
        <!--表单部分-->
        <div class="form">
        <el-form ref="loginFormRef" :model="loginForm" label-width="80px" :rules="loginFormRules" >
        <el-form-item prop="username">
            <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="loginForm.username">
</el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input placeholder="请输入密码" prefix-icon="el-icon-edit" v-model="loginForm.password"
 show-password></el-input>
        </el-form-item>
            <div class="go"><router-link to='/register'><el-link>点击注册</el-link></router-link></div>
        <el-form-item>
        <el-button @click="login">登陆</el-button>
        </el-form-item>
        </el-form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
          //登陆信息
        loginForm: {
          username: '',
          password:'',
        },
        //登陆信息的规则
        loginFormRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, message: '长度在 5 个字符以上', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, message: '长度在 5 个字符以上', trigger: 'blur' }
          ],
          usergroup:[]
      }}},
        methods:{
          //点击登陆
            login(){
                let flag=0;
                this.$refs.loginFormRef.validate(valid =>{
                    if(!valid) {
                        this.$message({showClose: true,message: '请输入正确的账号密码',type: 'error'});
                        return;
                        }
                        flag=1;
                    })
                if(flag){
                    for(var item in this.userGroup){
                        if(this.loginForm.username==this.userGroup[item].username&&
this.loginForm.password==this.userGroup[item].password){
                        //若登陆成功,更新票数和日期
                        if(!window.localStorage) this.$message({showClose: true,message: '发生未知错误！',type: 'error'});
                        var date = new Date()
                        var y = date.getFullYear();
                        var m = date.getMonth()+1;
                        var d = date.getDate();
                        var dateIs=y+'-'+m+'-'+d;
                        console.log(localStorage.userGroup)
                        if(this.userGroup[item].date!=dateIs){
this.userGroup[item].tickets=3;
this.userGroup[item].date=dateIs
}
                        localStorage.loginUser=JSON.stringify(this.userGroup[item]);
localStorage.userGroup=JSON.stringify(this.userGroup);

                        this.$router.push({ path:'/home' });
                        this.$message({showClose: true,message: '登陆成功',type: 'success'});
                        return ;
                        }
                    }
                    this.$message({showClose: true,message: '账号或密码错误！！！请输入正确的账号密码',type: 'error'});
                
                }
          },
          //点击注册
          register(){
              this.$router.push({ path:'/home'}); 
          },
          //
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
            this.oldMessage();
      }
}
</script>
