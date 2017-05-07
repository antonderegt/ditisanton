import * as types from './mutation-types'

export const mutations = {
  [types.GET_USER] (state, user_payload) {
    state.user = user_payload
  },
  [types.GET_BLOGS] (state, blog_payload) {
    state.blogs = blog_payload.blogs
  },
  [types.GET_POST] (state, post_payload) {
    state.post = post_payload.post
  },
  [types.SIGN_OUT] (state) {
    state.user = {}
  }
}
