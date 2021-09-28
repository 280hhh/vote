<template>
  <div class="result_container">
    <div class="result_box">
      <el-table :data="contestants" stripe height="910" style="width:100%;" >
            <el-table-column width="60" label="排名" align="center"> 
                <template scope="scope"><span>{{scope.$index + 1}}</span> </template>
            </el-table-column>
            <el-table-column min-width="2.1" label="照片" align="center"> 
                <template slot-scope="scope">
                <img :src="scope.row.src" class="head_pic" style="height:200px"/>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="名称" min-width="1" align="center"></el-table-column>
            <el-table-column prop="votes" min-width="3" align="center" label="票数">
            <template slot-scope="scope">
            <el-progress :show-text="false" :stroke-width="18" :percentage="(scope.row.votes)" :color="colors" v-if="!isNaN(scope.row.votes)">
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
    contestants:[],
    colors: [
          {color: '#1989fa', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#f56c6c', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],
  }
},
methods:{
  //进行排名
    sortBy(props) {
    return function(a,b) {
        return   b[props] - a[props];
    }}
},
mounted(){
  let a=JSON.parse(localStorage.contestants);
        for(var item in a){
            this.contestants.push(a[item]);
        }
        this.contestants.sort(this.sortBy("votes"));
  }
}
</script>

<style Lang="less" scoped>
.result_container{
  background-color: #f5f5f5;
}
.result_box{
  background-color: white;
  position: relative;
}
</style>