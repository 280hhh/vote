import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import '../assets/css/global.css'
import Home from '../components/home.vue'
import Register from '../components/register.vue'
import Result from '../components/result.vue'


Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/login',meta:{keepAlive:false}},
  {path:'/login',component:Login,meta:{keepAlive:false}},
  {path:'/home',component:Home,meta:{keepAlive:true}},
  {path:'/register',component:Register,meta:{keepAlive:false}},
  {path:'/result',component:Result,meta:{keepAlive:true}}
]

const router = new VueRouter({
  routes
})

export default router
