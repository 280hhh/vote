<template>
    <div>
      <el-menu :default-active="this.$route.path" router class="el-menu-demo" mode="horizontal">
        <el-menu-item v-for="(item,i) in nvaList" :key="i" :index="item.name">
          <template slot="title">
           <span> {{ item.navItem }}</span>
         </template>
        </el-menu-item>
        <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </el-menu>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  data(){
    return{
      nvaList:[
        {name:'/home',navItem:'投票界面'},
        {name:'/result',navItem:'投票结果'}
      ]
    }
  }
}
</script>

<style>
</style>
