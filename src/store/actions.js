import * as types from './mutation-types'
import axios from 'axios'

export const getUser = ({commit}) => {
  axios.get('/auth/isauth')
  .then( response => {
    console.log('got user data: ', response.data);
    commit(types.GET_USER, response.data)
  })
  .catch( error => {
    console.log(error);
  });
}

export const getBlogs = ({commit}) => {
  axios.get('/api/blog')
  .then( response => {
    console.log('got blog data: ', response.data);
    commit(types.GET_BLOGS, response.data)
  })
  .catch( error => {
    console.log(error);
  });
}

export const getPost = ({commit}, title) => {
  axios.post(`/api/blog/${title}`)
  .then( response => {
    console.log('got post data: ', response.data);
    commit(types.GET_POST, response.data)
  })
  .catch( error => {
    console.log(error);
  });
}

export const deletePost = ({commit}, title) => {
  axios.post(`/api/blog/delete`, title)
  .then( response => {
    console.log('new blog list: ', response.data);
    commit(types.DELETE_POST, response.data)
  })
  .catch( error => {
    console.log(error);
  });
}

export const postNewBlog = ({commit}, post) => {
  axios.post(`/api/blog/newblog`, post)
  .then( response => {
    console.log('got new blog: ', response.data);
    commit(types.POST_NEW_BLOG, response.data)
  })
  .catch( error => {
    console.log(error);
  });
}

export const postNewComment = ({commit}, comment) => {
  axios.post(`/api/blog/newcomment`, comment)
  .then( response => {
    console.log('got new comment: ', response.data);
    commit(types.POST_COMMENT, response.data)
  })
  .catch( error => {
    console.log(error);
  });
}

export const sendEmail = ({commit}, email) => {
  axios.post(`/api/mailer`, email)
  .then( response => {
    console.log('got mail response: ', response.data);
    commit(types.SEND_EMAIL, response.data)
  })
  .catch( error => {
    console.log(error);
  });
}

export const signOut = ({commit}) => {
  commit(types.SIGN_OUT)
}
