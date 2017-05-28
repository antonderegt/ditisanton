<template>
  <div>
    <div class="page-header">
      <h1>Blogs</h1>
    </div>
    <div
      v-for="(blog, index) in this.$store.state.blogs"
      key="index"
      class="blogList"
      @click="showBlogPost(blog)"
    >
      <h4>{{blog.title}}</h4>
      <h6>{{new Date(blog.date).getDate()}}-{{new Date(blog.date).toLocaleString("en-us", { month: "long" })}}-{{new Date(blog.date).getFullYear()}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showBlogPost(blog) {
      let linkTitle = blog.title.split(' ').join('-')
      this.$router.push(`/blog/${linkTitle}`)
    }
  },
  mounted() {
    this.$store.dispatch('getBlogs')
  }
}
</script>

<style scoped>
.blogList {
  display: flex;
  justify-content: space-between;
  padding: 0% 5% 0% 5%;
}

.blogList:hover {
  color: #42b983;
  cursor: pointer;
}
</style>
