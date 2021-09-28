<template>
      <div id="app">
        <!-- 路由占位符 -->
        <div id="nav" v-if="$route.meta.keepAlive">
        <el-menu :default-active="this.$route.path" router class="el-menu-demo" mode="horizontal">
          <el-menu-item v-for="(item,i) in nvaList" :key="i" :index="item.name">
            <template slot="title">
             <span> {{ item.navItem }}</span>
           </template>
          </el-menu-item>
          <el-menu-item>
            <el-dropdown>
              <el-button icon="el-icon-user-solid" size="small" circle></el-button>
              <el-dropdown-menu slot="dropdown">
                <div v-if="loginUser.username!=''">
                  <el-dropdown-item>用户:{{loginUser.username}}</el-dropdown-item>
                  <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
                </div>
                <div v-else>
                      <router-link to='/login'>
                        <el-dropdown-item>去登陆</el-dropdown-item>
                      </router-link>                   
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
        </el-menu>
    </div>
    <router-view></router-view>
    </div>
</template>

<script>
import Canvas from "../canvas-nest.min.js";
export default {
  name:"app",
  components:{
    Canvas
  },
  data(){
    return{
        loginUser:{
        username:'',
        email:'',
        password:'',
        checkPassword:'',
        phoneNumber:''
      },
      nvaList:[
        {name:'/home',navItem:'投票主页'},
        {name:'/result',navItem:'投票结果'}
      ],
    }
  },
  methods:{
    //点击退出登录时
      logOut(){
        for(var item in this.loginUser){
            this.loginUser[item]='';
        }
        localStorage.loginUser=JSON.stringify(this.loginUser);
        location.reload();
      }
  },
  mounted(){
        if(!window.localStorage) this.$message({showClose: true,message: '发生未知错误！',type: 'error'});
        //登录人信息初始化
        if(localStorage.loginUser!=null){
        this.loginUser=JSON.parse(localStorage.loginUser);
        //更新用户组和登陆人的票数和日期
        // this.oldMessage();
        for(var item in this.userGroup){
        }
            localStorage.loginUser=JSON.stringify(this.userGroup[item]);
            localStorage.userGroup=JSON.stringify(this.userGroup);
        }
  },
  created(){
}
}

</script>

<style>
body{
  margin: 0;
  padding: 0;
}
canvas{
    background: rgb(226, 225, 225);
    opacity: 0.3;
}
</style>
