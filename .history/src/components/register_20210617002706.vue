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
     //设置旧密码与新密码不允许一致
    let validateNewPassword = (rule, value, callback) => {
            if (value !== this.registerForm.password) {
                callback(new Error('与新密码不一致!'))
            } else {
                callback()
            }
      }
     //设置用户名不允许重复
        let noRepeat1 = (rule, value, callback) => {
            if(!window.localStorage) {callback();return ;}
            if(localStorage.userGroup==null) {callback();return ;}
            let flag=0;
            for(var item in this.userGroup){
                if(value == this.userGroup[item].username){callback(new Error('该用户名已经存在'));return ;}
            }
            callback();
        }
        //设置注册时手机号码不允许重复
        let noRepeat2 = (rule, value, callback) => {
            if(!window.localStorage) {callback();return ;}
            if(localStorage.userGroup==null) {callback();return ;}
            let flag=0;
            for(var item in this.userGroup){
                if(value == this.userGroup[item].phoneNumber){callback(new Error('该号码已经存在'));return ;}
            }
               callback();
        } 
    return{
      registerForm:{
        username:'',
        email:'',
        password:'',
        checkPassword:'',
        phoneNumber:''
      },
      registerRules:{
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 5, message: '长度在 5 个字符以上', trigger: 'blur' },
                    { pattern:'^[^ ]+$', message: '用户名不允许存在空格', trigger: 'blur' },
                    { validator:noRepeat1, trigger: 'blur' }
                ],
                email:[
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { pattern:'^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z0-9]{2,4}$',message:'请填入正确的邮箱地址',trigger:'blur'}
                ],
                password: [
                    { required: true, message: '请设置密码', trigger: 'blur' },
                    { min: 5, message: '要求密码长度在 5 个字符以上', trigger: 'blur' }
                ],
                checkPassword: [
                    { required: true, message: '请确认密码', trigger: 'blur' },
                    { validator: validateNewPassword, trigger: 'blur' },
                    { min: 5, message: '要求密码长度在 5 个字符以上', trigger: 'blur' }
                 ],
                phoneNumber:[
                    { required: true, message: '请填写手机号码', trigger: 'blur' },
                    {pattern:'^[1][3,4,5,7,8][0-9]{9}$',message:'请填写11位的手机号码',trigger:'blur'},
                    {validator: noRepeat2 , trigger:'blur' } 
                ],
      },
      userGroup:[]
    }
  },
  methods:{
    onSubmit(){
      let flag=0;//若预验证成功则返回1，若失败返回0
            this.$refs.registerFormRef.validate( valid =>{
                if(!valid) {
                    this.$message({showClose: true,message: '请输入正确的信息',type: 'error'
                    });
                    return false;
                }
                flag=1;//预验证成功！
                })
            if(flag){
                if(!window.localStorage) return;
                //如果之前有任何人注册过的话
                if(localStorage.userGroup != null){
                   this.userGroup.push(this.registerForm);
                   localStorage.userGroup=JSON.stringify(this.userGroup)
            
                }else{//如果之前没有任何人注册过的话
                this.userGroup.push(this.registerForm);
                this.userGroup.push(this.superUser);
                localStorage.userGroup=JSON.stringify(this.userGroup);
                }
                this.$router.push("/login");
                this.$message({showClose: true,message: '注册成功！',type: 'success'});
            }else{
                this.$message({showClose: true,message: '注册失败！请输入按要求填写注册信息！',type: 'error'});
            
            }
    },
    resetForm(){
      this.$refs.registerFormRef.resetFields();
    },
    //如果之前有任何人注册过的话,初始化用户组
        oldMessage(){
            if(!window.localStorage) {callback();return ;}
            let a=JSON.parse(localStorage.userGroup);
            for(let item in a){
                this.userGroup.push(a[item]);
            }
        }
        },mounted(){
            if(localStorage.userGroup!=null)this.oldMessage();//如果之前有任何人注册过的话,调用oldMessage方法，初始化用户组
        
  }
}
</script>

<style>
.register_container{
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
  top:50%;
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
  transform: translate(0,-50%);
}

.btns{
  display: flex;
  justify-content: flex-end;
}
</style>