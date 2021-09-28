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
              <el-button icon="el-icon-user" size="mini" round></el-button>
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
        <router-view></router-view>
    </div>
      </div>
</template>

<script>
export default {
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
        {name:'/home',navItem:'投票界面'},
        {name:'/result',navItem:'投票结果'}
      ],
    }
  },
  methods:{
    //点击退出登录时
      logOut(){
        for(let item in this.loginUser){
            this.loginUser[item]='';
        }
        localStorage.loginUser=JSON.stringify(this.loginUser);
      }
  },
  mounted(){
        //登录人信息初始化
        if(localStorage.loginUser!=null){
        this.loginUser=JSON.parse(localStorage.loginUser);
        //更新用户组和登陆人的票数和日期
        // this.oldMessage();
        for(item in this.userGroup){
            if(this.userGroup[item].username==this.loginUser.username){
            }
        }
            localStorage.loginUser=JSON.stringify(this.userGroup[item]);
            localStorage.userGroup=JSON.stringify(this.userGroup);
        }console.log(this.loginUser)
  }
}

</script>

<style>
</style>
