<template>
    <div class="body"><br/>
        <el-tooltip class="item" effect="dark" content="返回投票页面" placement="bottom-end">
      <el-button class="back" icon="el-icon-back" size="mini" type="primary" @click="back"></el-button>
    </el-tooltip>

    <div class="clear:both"></div>
        <el-header class="el-icon-info" >
统计在 2020年06月28日 - 2020年07月27日 的所有投票，实时更新排行榜
</el-header>
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
            <el-table-column prop="work" label="代表作" min-width="3" align="center"></el-table-column>
            <el-table-column prop="votes" min-width="3" align="center" label="票数">
            <template slot-scope="scope">
            <el-progress :show-text="false" :stroke-width="18" :percentage="(scope.row.votes/15)" :color="colors">
</el-progress>
            </template>
            </el-table-column >
            <el-table-column prop="votes"  min-width="1"></el-table-column>
  </el-table>
  <br/><br/>
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
    },methods:{
        //进行排名
    sortBy(props) {
    return function(a,b) {
        return   b[props] - a[props];
    }} ,
    back(){
        this.$router.push({ path:'/home' });
    }
    
    },mounted(){
        if(!window.localStorage) return;
        //如果直接进入outcome页面
        if(localStorage.contestants==null){
            this.$message({showClose: true,message: '请进行登录后再进行访问',type: 'error'});
            this.$router.push({ path:'/login' });return;}

        //初始化选手信息,并进行排名
        let a=JSON.parse(localStorage.contestants);
        for(var item in a){
            this.contestants.push(a[item]);
        }
        this.contestants.sort(this.sortBy("votes"));
    },
}
</script>
