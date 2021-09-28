<template>
  <div>
     <div style="clear:both"></div>
            <div class="space"></div>
        <div class="title"></div>
            <div class="space"></div>
        <div class="title2"></div>
            <div class="space"></div>
        <!-- <div class="hot">
            <img src="../image/bg.jpg" usemap="#cli">
            <map name="cli">
            <area shape="rect" coords="230,352,547,447"  @click="gotoOutcome" href="javascript:;">
            </map>
        </div> -->
    <div class="content">
            <ul id="ulBreakfast" type="none" v-for="(item,index) in showContestants" :key="index">
                <li id="model">
                    <img :src="item.src">
                    <p>{{item.name}}</p>
                    <p>类型:{{item.class}}</p>&nbsp;&nbsp;&nbsp;
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

<style>
.content{
  background-color: gray;
  float: left;
  width:800px;
}
.content ul{
  
  float: left;
  text-align: center;
  border:1px solid white;
}
.content ul img{
  width: 150px;
  margin-top: 30px;
  box-shadow:0px 0px 3px gray
}
.content ul li{
  width:160px;
  float: left;
}
</style>