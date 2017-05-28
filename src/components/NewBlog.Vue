<template lang="html">
  <div>
    <div v-if="this.$store.state.user.local">
      | <a href="/auth/logout">Logout</a> |
      <div class="page-header">
        <h1>New Blog</h1>
      </div>
      Title:
      <input type="text" v-model="title"/>
      Post:
      <textarea v-model="blog" placeholder="add multiple lines"></textarea>
      <button class="btn btn-primary" @click="postBlog">Post Blog</button>
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
    }
  },
  mounted() {
    this.$store.dispatch('getUser')
  }
}
</script>

<style lang="css">
</style>
