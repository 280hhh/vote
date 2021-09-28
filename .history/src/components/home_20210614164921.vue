<template>
  <div class="home_container">
      <div class="content">
        <span>十大热门电影投票</span>
          <ul id="ulBreakfast" type="none" v-for="(item,index) in showContestants" :key="index">
              <li id="model">
                  <img :src="item.src"><p>{{item.name}}</p><p>类型:{{item.class}}</p>
                  <el-button type="danger" round @click.native="addTicket(item)">投票</el-button>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        contestants:
        [{src:require('../image/肖申克的救赎.jpg'),name:'肖申克的救赎',class:'犯罪/剧情',number:'1',value:'肖申克的救赎'},
        {src:require('../image/低俗小说.jpg'),name:'低俗小说',class:'犯罪/喜剧/剧情',number:'2',value:'低俗小说'},
        {src:require('../image/教父.jpg'),name:'教父',class:'犯罪/剧情',number:'3',value:'教父'},
        {src:require('../image/怦然心动.jpg'),name:'怦然心动',class:'喜剧/爱情/剧情',number:'4',value:'怦然心动'},
        {src:require('../image/情书.jpg'),name:'情书',class:'爱情/剧情',number:'5',value:'情书'},
        {src:require('../image/霸王别姬.jpg'),name:'霸王别姬',class:'爱情/剧情/同性',number:'6',value:'霸王别姬'},
        {src:require('../image/这个杀手不太冷.jpg'),name:'这个杀手不太冷',class:'犯罪/剧情/动作',number:'7',value:'这个杀手不太冷'},
        {src:require('../image/色戒.jpg'),name:'色戒',class:'爱情/剧情/情色',number:'8',value:'色戒'},
        {src:require('../image/被解救的姜戈.jpg'),name:'被解救的姜戈',class:'动作/剧情/西部/冒险',number:'9',value:'被解救的姜戈'},
        {src:require('../image/让子弹飞.jpg'),name:'让子弹飞',class:'喜剧/剧情/动作',number:'10',value:'让子弹飞'}],
        showContestants:[],
    }
  },
  methods:{
    addTicket(item){
      console.log(item)
    }
  },
  mounted(){
      if(localStorage.contestants!=null){
            this.contestants=[];
        let a=JSON.parse(localStorage.contestants);
                for(var item in a){
            this.contestants.push(a[item])
        }}
        if(localStorage.contestants==null){localStorage.contestants=JSON.stringify(this.contestants);}
        this.showContestants=this.contestants
        }
  
}
</script>

<style Lang="less" scoped>
.home_container{
  background-color: #f5f5f5;
}
.content{
  width: 1150px;
  height: 950px;
  position: relative;
  left: 28%;
  vertical-align: middle;
  display: table-cell;
  background-color: yellow;
}
.content span{
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.content ul{
  text-align:center;
  width:1150px;
}
.content ul img{
  width: 150px;
  margin-top: 30px;
  box-shadow:0px 0px 3px gray;
}
.content ul li{
  width: 210px;
  height: 400px;
  float: left;
  background-color: white;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 3px;
}
</style>