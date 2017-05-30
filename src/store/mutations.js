import * as types from './mutation-types'

export const mutations = {
  [types.GET_USER] (state, user_payload) {
    state.user = user_payload
  },
  [types.GET_BLOGS] (state, blog_payload) {
    state.blogs = blog_payload.blogs.reverse()
  },
  [types.GET_POST] (state, post_payload) {
    state.post = post_payload.post
  },
  [types.LOAD_LAST_POST] (state, post_payload) {
    state.post = post_payload.post
  },
  [types.UPDATE_POST] (state, post_payload) {
    state.post = post_payload.post
  },
  [types.POST_NEW_BLOG] (state, post_payload) {
    state.post = post_payload.post
  },
  [types.SIGN_OUT] (state) {
    state.user = {}
  },
  [types.SEND_EMAIL] (state, email_payload) {
    state.email = email_payload
  },
  [types.POST_COMMENT] (state, post_payload) {
    state.post = post_payload.post
  },
  [types.DELETE_POST] (state, blog_payload) {
    state.blogs = blog_payload.blogs.reverse()
  }
}
