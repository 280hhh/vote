<template>
<div>
        <el-menu :default-active="this.$route.path" router class="el-menu-demo" mode="horizontal">
        <el-menu-item v-for="(item,i) in nvaList" :key="i" :index="item.name">
          <template slot="title">
           <span> {{ item.navItem }}</span>
         </template>
        </el-menu-item>
      </el-menu>
</div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style>

</style>