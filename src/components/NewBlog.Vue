<template lang="html">
  <div>
    <div v-if="this.$store.state.user.local">
      | <a href="/auth/logout">Logout</a> |
      <div class="page-header">
        <h1>New Blog</h1>
      </div>
      <button class="btn" @click="loadLastPost">Load Last Post</button>
      Title:
      <input type="text" v-model="title"/>
      Post:
      <textarea v-model="blog" placeholder="add multiple lines"></textarea>
      <button class="btn btn-primary" @click="postBlog">Post Blog</button>
      <button class="btn btn-primary" @click="updateBlog">Update Blog</button>
    </div>
    <div v-else>
      <p class="route">Please login first... <a href="/login">Login</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      blog: ''
    }
  },
  methods: {
    postBlog() {
      console.log(`Title: ${this.title}, text: ${this.blog}`);
      let post = {
        title: this.title,
        text: this.blog
      }
      this.$store.dispatch('postNewBlog', post)
      let linkTitle = this.title.split(' ').join('-')
      this.$router.push(`/blog/${linkTitle}`)
    },
    updateBlog() {
      console.log(`Title: ${this.title}, text: ${this.blog}`);
      let post = {
        title: this.title,
        text: this.blog,
        _id: this.$store.state.post._id
      }
      this.$store.dispatch('updatePost', post)
      let linkTitle = this.title.split(' ').join('-')
      this.$router.push(`/blog/${linkTitle}`)
    },
    loadLastPost() {
      this.$store.dispatch('loadLastPost')
    }
  },
  mounted() {
    this.$store.dispatch('getUser')

    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'LOAD_LAST_POST':
          this.title = this.$store.state.post.title
          this.blog = this.$store.state.post.text
          break;
        default:
      }
    })
  }
}
</script>

<style lang="css">
</style>
