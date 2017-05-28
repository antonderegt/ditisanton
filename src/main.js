import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import store from './store'

Vue.use(VueRouter)
import Home from './components/Home.vue'
import BlogList from './components/BlogList.vue'
import Resources from './components/Resources.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import BlogPost from './components/BlogPost.vue'
import NewBlog from './components/NewBlog.vue'
import FourOFour from './components/FourOFour.vue'
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/newblog', component: NewBlog },
    { path: '/blog', component: BlogList },
    { path: '/resources', component: Resources },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/blog/:title', component: BlogPost },
    { path: '*', component: FourOFour }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
