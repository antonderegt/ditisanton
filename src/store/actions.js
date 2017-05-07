import * as types from './mutation-types'
import axios from 'axios'

export const getUser = ({commit}) => {
  axios.get('/isauth')
  .then(function (response) {
    console.log('got user data: ', response.data);
    commit(types.GET_USER, response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const getBlogs = ({commit}) => {
  axios.get('/api/blog')
  .then(function (response) {
    console.log('got blog data: ', response.data);
    commit(types.GET_BLOGS, response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const getPost = ({commit}, title) => {
  axios.post(`/api/blog/${title}`)
  .then(function (response) {
    console.log('got post data: ', response.data);
    commit(types.GET_POST, response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const signOut = ({commit}) => {
  commit(types.SIGN_OUT)
}
