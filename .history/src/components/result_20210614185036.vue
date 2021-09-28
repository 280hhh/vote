<template>
  <div class="result_container">
    <div class="result_box">
      <el-table :data="contestants" stripe style="width:68%;margin:auto;">
            <el-table-column width="60" label="排名" align="right"> 
                <template scope="scope"><span>{{scope.$index + 1}}</span> </template>
            </el-table-column>
            <el-table-column min-width="2.1" label="照片" align="center"> 
                <template slot-scope="scope">
                <img :src="scope.row.src" class="head_pic"/>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" min-width="1" align="center"></el-table-column>
            <el-table-column prop="votes" min-width="3" align="center" label="票数">
            <template slot-scope="scope">
            <el-progress :show-text="false" :stroke-width="18" :percentage="(scope.row.votes/15)" :color="colors">
                </el-progress>
            </template>
            </el-table-column >
            <el-table-column prop="votes"  min-width="1"></el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
  }
},
methods:{
},
mounted(){
  }
}
</script>

<style Lang="less" scoped>
.result_container{
  background-color: #f5f5f5;
  height: 100%;
}
.result_box{
  background-color: white;
  width: 500px;
  height: 500px;
  left: 50%;
  position: relative;
}
</style>