import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import '../assets/css/global.css'
import Home from '../components/home.vue'
import Register from '../components/register.vue'
import Result from '../components/result.vue'


Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/login'},
  {path:'/login',component:Login},
  {path:'/home',component:Home},
  {path:'/register',component:Register},
  {path:'/result',component:Result}
]

const router = new VueRouter({
  routes
})

export default router
