<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">投票页面</el-menu-item>
  <el-menu-item index="2">投票结果</el-menu-item>
</el-menu>
</template>

<script>
export default {
  data(){
    return{
      activeIndex: '1'
    }
  },
  methods:{
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style>

</style>