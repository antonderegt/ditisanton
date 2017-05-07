import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import store from './store'

Vue.use(VueRouter)
import Home from './components/Home.vue'
import BlogList from './components/BlogList.vue'
import Resources from './components/Resources.vue'
import Signin from './components/Signin.vue'
import BlogPost from './components/BlogPost.vue'
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/blog', component: BlogList },
    { path: '/resources', component: Resources },
    { path: '/signin', component: Signin },
    { path: '/blog/:title', component: BlogPost }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
