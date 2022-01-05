import { createRouter, createWebHashHistory } from 'vue-router'
//一级路由
import Login from '../views/Login'
import Home from '../views/Home'
//二级路由
import All from '../components/All.vue'
import Sp from '../components/Sp.vue'
import Ssr from '../components/Ssr.vue'
import Sr from '../components/Sr.vue'
import R from '../components/R.vue'
import N from '../components/N.vue'
import Add from '../components/Add.vue'
import Role from '../components/Role.vue'



const routes = [
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  },*/
  {path: '/', redirect: '/login' },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/home',
    name:'Home',
    component:Home,
    children:[
      {path:'/home',redirect:'/home/all' ,},
      {path:'all', name:'All', component:All,},
      {path:'sp', name:'Sp', component:Sp},
      {path:'ssr', name:'Ssr', component:Ssr},
      {path:'sr', name:'Sr', component:Sr},
      {path:'r', name:'R', component:R},
      {path:'n', name:'N', component:N},
      {path:'add', name:'Add', component:Add},
      {path:'role', name:'Role', component:Role, props:true},
    ]
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  // console.log('从',from);
  // console.log('去',to);
  // console.log(localStorage.getItem('isLogin')==='false');
  if (to.name !== 'Login'&&localStorage.getItem('isLogin')==='false'){
    next({ name: 'Login' });
  } else if(to.name ===  'Login' && localStorage.getItem('isLogin')==='true' ){
    next({name : 'All' })
  } else next()
});

export default router
