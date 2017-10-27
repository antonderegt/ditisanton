import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import store from './store'

const Home = resolve => require(['./components/Home.vue'], resolve)
const Me = resolve => require(['./components/Me.vue'], resolve)
const Social = resolve => require(['./components/Social.vue'], resolve)
const BlogList = resolve => require(['./components/BlogList.vue'], resolve)
const Resources = resolve => require(['./components/Resources.vue'], resolve)
const FourOFour = resolve => require(['./components/FourOFour.vue'], resolve)
// const BlogPost = resolve => require(['./components/BlogPost.vue'], resolve)
// const NewBlog = resolve => require(['./components/NewBlog.vue'], resolve)
// const Login = resolve => require(['./components/Login.vue'], resolve)
// const Signup = resolve => require(['./components/Signup.vue'], resolve)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/me', component: Me },
    { path: '/social', component: Social },
    { path: '/blog', component: BlogList },
    { path: '/resources', component: Resources },
    // { path: '/blog/:title', component: BlogPost },
    // { path: '/newblog', component: NewBlog },
    // { path: '/login', component: Login },
    // { path: '/signup', component: Signup },
    { path: '*', component: FourOFour }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
