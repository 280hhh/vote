<template>
  <div>
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
                <el-dropdown-item>退出</el-dropdown-item>
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
  },
  mounted(){
        var that=this;
        //登录人信息初始化
        if(localStorage.loginUser!=null){
        that.loginUser=JSON.parse(localStorage.loginUser);
        //更新用户组和登陆人的票数和日期
        this.oldMessage();
        for(item in that.userGroup){
            if(that.userGroup[item].username==that.loginUser.username){
              console.log(username)
            }
        }
            localStorage.loginUser=JSON.stringify(that.userGroup[item]);
            localStorage.userGroup=JSON.stringify(that.userGroup);
        }console.log(loginUser.username)
  }
}
</script>

<style>

</style>