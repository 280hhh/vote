<template>
  <div class="home_container">
      <div class="content">
        <h1>十佳电影投票</h1>
          <ul id="ulBreakfast" type="none" v-for="(item,index) in showContestants" :key="index">
              <li id="model">
                  <el-tooltip class="item" effect="dark" :content="item.ds" placement="top">
                    <img :src="item.src">
                  </el-tooltip>
                  <p>{{item.name}}</p><p>类型:{{item.class}}</p>
                  <el-button type="primary" round @click.native="addTicket(item)">投票</el-button>
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
        [{src:require('../image/肖申克的救赎.jpg'),name:'肖申克的救赎',class:'犯罪/剧情',number:'1',votes:'0',value:'肖申克的救赎',ds:'"希望让人自由"'},
        {src:require('../image/低俗小说.jpg'),name:'低俗小说',class:'犯罪/喜剧/剧情',number:'2',votes:'0',value:'低俗小说',ds:'"故事的高级讲法"'},
        {src:require('../image/教父.jpg'),name:'教父',class:'犯罪/剧情',number:'3',votes:'0',value:'教父',ds:'"千万不要记恨你的对手，这样会让你失去理智"'},
        {src:require('../image/怦然心动.jpg'),name:'怦然心动',class:'喜剧/爱情/剧情',number:'4',votes:'0',value:'怦然心动',ds:'"真正的幸福是来自内心深处"'},
        {src:require('../image/情书.jpg'),name:'情书',class:'爱情/剧情',number:'5',votes:'0',value:'情书',ds:'"暗恋的极致"'},
        {src:require('../image/霸王别姬.jpg'),name:'霸王别姬',class:'爱情/剧情/同性',number:'6',votes:'0',value:'霸王别姬',ds:'"风华绝代"'},
        {src:require('../image/这个杀手不太冷.jpg'),name:'这个杀手不太冷',class:'犯罪/剧情/动作',number:'7',votes:'0',value:'这个杀手不太冷',ds:'"怪蜀黍和小萝莉不得不说的故事"'},
        {src:require('../image/色戒.jpg'),name:'色戒',class:'爱情/剧情/情色',number:'8',votes:'0',value:'色戒',ds:'"假戏真情，爱欲深海"'},
        {src:require('../image/被解救的姜戈.jpg'),name:'被解救的姜戈',class:'动作/剧情/西部/冒险',number:'9',votes:'0',value:'被解救的姜戈',ds:'"热血沸腾，那个低俗、性感的无耻混蛋又来了"'},
        {src:require('../image/让子弹飞.jpg'),name:'让子弹飞',class:'喜剧/剧情/动作',number:'10',votes:'0',value:'让子弹飞',ds:'"你给我翻译翻译，神马叫做TMD的惊喜"'}],
        showContestants:[],
        dialogVisible: false,
        dialogTitle:[],
        loginUser:{
          username:'',
          email:'',
          password:'',
          checkPassword:'',
          phoneNumber:'',
        }
    }
  },
  methods:{
    addTicket(item){
      console.log(this.loginUser.username)
      if(this.loginUser.username==="")
      {this.$message({type: 'error',showClose: true,message: '请登录后再进行投票'});return;}
      console.log(item)
      for(var index in this.contestants){
                if(item.number==this.contestants[index].number)
                {this.contestants[index].votes++;}
            };
            this.$message({
            type: 'success',
            showClose: true,
            message: '投票成功！'
        });
        localStorage.contestants=JSON.stringify(this.contestants);
        console.log(this.contestants)
    },
      detail(item){
        for(var index in this.contestants){
            if(item.number==this.contestants[index].number)
            {this.dialogVisible=true;}
        };
        console.log(item)
      }
  },
  mounted(){
      //登录人信息初始化
        if(localStorage.loginUser!=null){
        this.loginUser=JSON.parse(localStorage.loginUser);    
        // // this.oldMessage();
        // for(item in this.userGroup){
        //     if(this.userGroup[item].username==this.loginUser.username){
        //       console.log(username)
        //     }
        // }
        //     localStorage.loginUser=JSON.stringify(this.userGroup[item]);
        //     localStorage.userGroup=JSON.stringify(this.userGroup);
        }  
      //对影片的信息进行初始化   
      if(localStorage.contestants!=null){
            this.contestants=[];
            let a=JSON.parse(localStorage.contestants);
                for(var item in a){
            this.contestants.push(a[item])
        }}
        if(localStorage.contestants==null)
        {localStorage.contestants=JSON.stringify(this.contestants);}
        this.showContestants=this.contestants
        }
  
}
</script>

<style Lang="less" scoped>
.content{
  width: 1150px;
  height: 950px;
  position: relative;
  left: 29%;
  vertical-align: middle;
  display: table-cell;

}
.content h1{
  position: relative;
  text-align: center;
}
.content ul{
  text-align:center;
  width:1150px;
}
.content ul img{
  width: 150px;
  margin-top: 30px;
  box-shadow:0px 0px 3px gray;
  cursor: pointer;
  transition: all 0.6s;
}
.content ul img:hover{
  transform: scale(1.2);
}
.content ul li{
  width: 210px;
  height: 400px;
  float: left;
  background-color: white;
  margin-left: 23px;
  margin-top: 23px;
  border-radius: 10px;
  box-shadow:0px 0px 10px gray;
}
</style>