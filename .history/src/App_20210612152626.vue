<template>
    <div>
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
