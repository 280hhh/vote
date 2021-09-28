<template>
  <div id="app">
      <el-menu :default-active="this.$route.path" route class="el-menu-demo" mode="horizontal"></el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      nvaList:[
        {name:'/',navItem:'投票页面'},
        {name:'/result',navItem:'投票结果'}
      ]
    }
  }
}
</script>

<style>
</style>
