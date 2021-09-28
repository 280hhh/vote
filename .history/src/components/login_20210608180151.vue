<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../image/jr.jpg">
      </div>
      <!-- 登录表单区域 -->
      <el-form label-width="0px">
        <!-- 用户名 -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item>
          <el-button type="primary" round>登录</el-button>
          <el-button type="primary" round>注册</el-button>
        </el-form-item>
      </el-form>
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
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
}
.avatar_box img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
}
</style>