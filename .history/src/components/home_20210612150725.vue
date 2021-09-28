<template>
<div>投票界面</div>
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