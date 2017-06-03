import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import store from './store'

// const Home = resolve => {
//   require.ensure(['./components/Home.vue'], () => {
//     resolve(require('./components/Home.vue'))
//   })
// }
const Home = resolve => require(['./components/Home.vue'], resolve)

const BlogList = resolve => {
  require.ensure(['./components/BlogList.vue'], () => {
    resolve(require('./components/BlogList.vue'))
  })
}

const Resources = resolve => {
  require.ensure(['./components/Resources.vue'], () => {
    resolve(require('./components/Resources.vue'))
  })
}

const Login = resolve => {
  require.ensure(['./components/Login.vue'], () => {
    resolve(require('./components/Login.vue'))
  })
}

const Signup = resolve => {
  require.ensure(['./components/Signup.vue'], () => {
    resolve(require('./components/Signup.vue'))
  })
}

const BlogPost = resolve => {
  require.ensure(['./components/BlogPost.vue'], () => {
    resolve(require('./components/BlogPost.vue'))
  })
}

const NewBlog = resolve => {
  require.ensure(['./components/NewBlog.vue'], () => {
    resolve(require('./components/NewBlog.vue'))
  })
}

const FourOFour = resolve => {
  require.ensure(['./components/FourOFour.vue'], () => {
    resolve(require('./components/FourOFour.vue'))
  })
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/newblog', component: NewBlog },
    { path: '/blog', component: BlogList },
    { path: '/resources', component: Resources },
    { path: '/login', component: Login },
    // { path: '/signup', component: Signup },
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
