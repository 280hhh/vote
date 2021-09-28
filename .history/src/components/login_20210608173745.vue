<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../image/jr.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style Lang="less" scoped>
.login_container{
  background: url("../image/bg.jpg");
  height: 100%;
}
.login_box{
  height: 300px;
  width: 450px;
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.login_box .avatar_box{
  height: 130px;
  width: 130px;
  border:1px solid #eee;
  border-radius: 50%;
  padding: 10px;
}
.avatar_box img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
}
</style>