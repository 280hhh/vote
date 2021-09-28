<template>
    <div class="body">
        <div class="user">
            <el-dropdown trigger="hover" style="overflow:hidden"  class="user">
              <el-button icon="el-icon-user" size="mini" type="danger" round></el-button>
                <el-dropdown-menu slot="dropdown" >
                    <div v-if="loginUser.username!=''" >
                    <el-dropdown-item 
style="padding:0px;margin:0px;max-width:200px;height:50px;display:block;border-bottom:1px solid red">用户:{{loginUser.username}}</el-dropdown-item>
                    <el-dropdown-item @click.native="logOut" 
style="padding:0px;margin:0px;max-width:200px;height:50px;display:block;border-bottom:1px solid red">
退出</el-dropdown-item>
                    </div>
                    <div v-else>
                    <router-link to='/login'><el-dropdown-item 
style="padding:0px;margin:0px;max-width:200px;height:50px;display:block;border-bottom:1px solid red">
去登陆</el-dropdown-item></router-link>                   
                    </div>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div style="clear:both"></div>
            <div class="space"></div>
        <div class="title"></div>
            <div class="space"></div>
        <div class="title2"></div>
            <div class="space"></div>
        <div class="hot">
            <img src="../assets/describe.png" usemap="#cli">
            <map name="cli">
            <area shape="rect" coords="230,352,547,447"  @click="gotoOutcome" href="javascript:;">
            </map>
        </div>
            <div class="space"></div>
        <div class="find">
            <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync"
 placeholder="请输入参赛人名字" @select="handleSelect" style="width:400px;"></el-autocomplete>
            <el-button type="danger" icon="el-icon-search" @click.native="show">搜索</el-button>
        </div>
        <div class="content">
            <ul id="ulBreakfast" type="none" v-for="(item,index) in showContestants" :key="index">
                <li id="model" >
                    <img :src="item.src"
          style="width: 270px;height: 300px;margin-top: 30px;box-shadow:0px 0px 3px gray">
                    <p>{{item.name}}</p>
                    <p>代表作:{{item.work}}</p>&nbsp;&nbsp;&nbsp;
                    <p>票数:{{item.votes}}</p>&nbsp;&nbsp;&nbsp;
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
            value: true,
            //搜索框中的内容
            state:'',
            timeout:  null,
            //初始的参选人信息
            contestants:[
                {src:require('@/assets/girls/林青霞.jpg'),name:'林青霞',work:'笑傲江湖，新天龙八部之天山童姥',number:'1',votes:'1000',value:'林青霞'},
                {src:require('@/assets/girls/关之琳.jpg'),name:'关之琳',work:'黄飞鸿系列电影',
number:'2',votes:'1000',value:'关之琳'},
                {src:require('@/assets/girls/李嘉欣.jpg'),name:'李嘉欣',work:'韦小宝，方世玉',
number:'3',votes:'1000',value:'李嘉欣'},
                {src:require('@/assets/girls/袁洁莹.jpg'),name:'袁洁莹',work:'开心鬼',
number:'4',votes:'1000',value:'袁洁莹'},
                {src:require('@/assets/girls/袁咏仪.jpg'),name:'袁咏仪',work:'国产凌凌漆',
number:'5',votes:'1000',value:'袁咏仪'},
                {src:require('@/assets/girls/邱淑贞.jpg'),name:'邱淑贞',work:'赌圣',
number:'6',votes:'1000',value:'邱淑贞'},
                {src:require('@/assets/girls/万绮雯.jpg'),name:'万绮雯',work:'我和僵尸有个约会',
number:'7',votes:'1000',value:'万绮雯'},
                {src:require('@/assets/girls/王祖贤.jpg'),name:'王祖贤',work:'倩女幽魂，青蛇',
number:'8',votes:'1000',value:'王祖贤'},
                {src:require('@/assets/girls/张柏芝.jpg'),name:'张柏芝',work:'喜剧之王',
number:'9',votes:'1000',value:'张柏芝'},
                {src:require('@/assets/girls/赵雅芝.jpg'),name:'赵雅芝',work:'上海滩',
number:'10',votes:'1000',value:'赵雅芝'},
                {src:require('@/assets/girls/张曼玉.jpg'),name:'张曼玉',work:'阮玲玉，甜蜜蜜，花样年华',
number:'11',votes:'1000',value:'张曼玉'},
                {src:require('@/assets/girls/黎姿.jpg'),name:'黎姿',work:'古惑仔',
number:'12',votes:'1000',value:'黎姿'},
                {src:require('@/assets/girls/周海媚.jpg'),name:'周海媚',work:'倚天屠龙记',
number:'13',votes:'1000',value:'周海媚'},
                {src:require('@/assets/girls/周慧敏.jpg'),name:'周慧敏',work:'大时代',
number:'14',votes:'1000',value:'周慧敏'},
                {src:require('@/assets/girls/朱茵.jpeg'),name:'朱茵',work:'大话西游',
number:'15',votes:'1000',value:'朱茵'},                             
            ],
            //展示的参选人信息
            showContestants:[],
            //登陆的用户
            loginUser:{
                username:'',
                email:'',
                password:'',
                checkPassword:'',
                qq:'',
                workTel:'',
                tel:'',
                phoneNumber:'',
                date:'',
                tickets:'',
            }
        }
    },methods:{
        addTicket(item){
            //如果没有登录投票失败
            if(this.loginUser.tickets===""){
this.$message({type: 'error',showClose: true,message: '请登录后再进行投票'});return;}
            //如果票数不够，投票失败
            if(this.loginUser.tickets===0){
                this.$message({type: 'error',showClose: true,message: '每人一天有三票，您的票数不够，
明天再来投票吧'});
        return;}
            //票数足够，投票成功
            this.loginUser.tickets--;
            let a=JSON.parse(localStorage.userGroup);
            this.userGroup=a;
            for(var index in a){
                if(a[index].username==this.loginUser.username)a[index].tickets=this.loginUser.tickets;
            }
            //投票成功后，再将可以剩余的票数存入JSON.stringify中
            localStorage.userGroup=JSON.stringify(a);
            localStorage.loginUser=JSON.stringify(this.loginUser);
            for(var index in this.contestants){
                if(item.number==this.contestants[index].number){this.contestants[index].votes++;}
            };
            this.$message({
            type: 'success',
            showClose: true,
            message: '投票成功！'
        });
        //投票成功后，再将参赛人的信息存入JSON.stringify中
        localStorage.contestants=JSON.stringify(this.contestants);
        },
        //以下是查询参赛人列表的显示
      querySearchAsync(queryString, cb) {
        var contestants = this.contestants;
        var results = queryString ? contestants.filter(this.createStateFilter(queryString)) : contestants;
        
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 20 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
      },
      //点击搜索时
      show(){
          if(this.state == ''){this.showContestants=this.contestants}
           for(var index in this.contestants){
                if(this.state==this.contestants[index].name){
this.showContestants=this.contestants.filter(this.createStateFilter(this.state))}
            };
      },
      //点击退出登录时
      logOut(){
        for(let item in this.loginUser){
            this.loginUser[item]='';
        }
        localStorage.loginUser=JSON.stringify(this.loginUser);
      },
        //点击投票结果时，跳转到投票结果页面
        gotoOutcome(){
            this.$router.push({ path:'/outcome' });
        },
        },
    
    mounted(){
        if(!window.localStorage) this.$message({showClose: true,message: '发生未知错误！',type: 'error'});
        //登录人信息初始化
        if(localStorage.loginUser!=null){
        this.loginUser=JSON.parse(localStorage.loginUser);
        //更新用户组和登陆人的票数和日期
        var date = new Date()
        var y = date.getFullYear();
        var m = date.getMonth()+1;
        var d = date.getDate();
        var dateIs=y+'-'+m+'-'+d;
        this.oldMessage();
        for(item in this.userGroup){
            if(this.userGroup[item].username==this.loginUser.username){
            if(this.userGroup[item].date!=dateIs){
                this.userGroup[item].date=dateIs
                this.loginUser.date=dateIs;
                this.userGroup[item].tickets=3;
                this.loginUser.tickets=this.userGroup[item].tickets;
                }
            }
        }
            localStorage.loginUser=JSON.stringify(this.userGroup[item]);
            localStorage.userGroup=JSON.stringify(this.userGroup);
        }

        //对选手的信息进行初始化
        if(localStorage.contestants!=null){
            this.contestants=[];
        let a=JSON.parse(localStorage.contestants);
                for(var item in a){
            this.contestants.push(a[item])
        }}
        if(localStorage.contestants==null){localStorage.contestants=JSON.stringify(this.contestants);}
        this.showContestants=this.contestants
        },      
}
</script>
