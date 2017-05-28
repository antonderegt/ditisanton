<template lang="html">
  <div>
    <div class="page-header">
      <!-- @TODO blogpost image -->
      <h1>New Blog</h1>
    </div>
    Title:
    <input type="text" v-model="title"/>
    Post:
    <textarea v-model="blog" placeholder="add multiple lines"></textarea>
    <button class="btn btn-primary" @click="postBlog">Post Blog</button>
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
  }
}
</script>

<style lang="css">
</style>
