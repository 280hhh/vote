import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import '../assets/css/global.css'
import Home from '../components/home.vue'
import Register from '../components/register.vue'
import Result from '../components/result.vue'


Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/login',meta:{keepAliver:false}},
  {path:'/login',component:Login,meta:{keepAliver:false}},
  {path:'/home',component:Home,meta:{keepAliver:true}},
  {path:'/register',component:Register,meta:{keepAliver:false}},
  {path:'/result',component:Result,meta:{keepAliver:true}}
]

const router = new VueRouter({
  routes
})

export default router
