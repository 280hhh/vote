<template>
    <div class="body">
        <div class="main">
            <h1>注册</h1>
            <el-form ref="registerFormRef" :model="registerForm" label-width="80px" :rules="registerRules">
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
                <el-form-item label="QQ" prop="qq">
                    <el-input v-model="registerForm.qq"></el-input>
                </el-form-item>
                <el-form-item label="办公电话" prop="workTel">
                    <el-input v-model="registerForm.workTel"></el-input>
                </el-form-item>
                <el-form-item label="家庭电话" prop="tel">
                    <el-input v-model="registerForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="phoneNumber">
                    <el-input v-model="registerForm.phoneNumber"></el-input>
                </el-form-item>
                <el-form>
                <div class="submit">
                    <el-button @click="resetForm()">重置</el-button>
                    <el-button type="primary" @click="onSubmit()">注册</el-button>
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
            //注册信息
            registerForm:{
                username:'',
                email:'',
                password:'',
                checkPassword:'',
                qq:'',
                workTel:'',
                tel:'',
                phoneNumber:'',
                date:'',
                tickets:'3',
            },
            //注册的信息必须符合的规则
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
                qq:[
                    { required: true, message: '请输入qq账号', trigger: 'blur' },
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
                workTel:[],
                tel:[],
                date:[],
                tickets:[],
            },
            //用户组
            userGroup:[
                
            ],
            //超级用户
            superUser:{
                username:'admin',
                email:'',
                password:'12345',
                checkPassword:'',
                qq:'',
                workTel:'',
                tel:'',
                phoneNumber:'',
                date:'',
                tickets:'',
            },            
        }
    },
    methods:{
        //点击注册时
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
                //对registerForm的date和tickets进行处理
                var date = new Date()
                var y = date.getFullYear();
                var m = date.getMonth()+1;
                var d = date.getDate();
                this.registerForm.date=y+'-'+m+'-'+d;
                this.registerForm.tickets=3;

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
        //点击重置
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
