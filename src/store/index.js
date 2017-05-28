import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  user: {},
  blogs: [
    {
      title: `Can't load the blogs...`,
      text: 'null'
    }
  ],
  post: {
    title: 'Sorry',
    text: 'No blog found...'
  },
  email: {}
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
