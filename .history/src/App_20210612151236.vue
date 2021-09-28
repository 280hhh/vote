<template>
    <div>
      <el-menu :default-active="this.$route.path" route class="el-menu-demo" mode="horizontal">
        <el-menu-item v-for="(item,i) in nvaList" :key="i" :index="item.name">
          <template slot="title">
11           <span> {{ item.navItem }}</span>
12         </template>
        </el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  data(){
    return{
      nvaList:[
        {name:'/home',navItem:'投票页面'},
        {name:'/result',navItem:'投票结果'}
      ]
    }
  }
}
</script>

<style>
</style>
