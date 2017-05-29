<template>
  <div>
    <div class="page-header">
      <h1>Blogs</h1>
    </div>
    <div v-if="$store.state.user.local">
      <div
        v-for="(blog, index) in this.$store.state.blogs"
        key="index"
        class="blogList"
      >
      <div @click="showBlogPost(blog)">
        <h4>{{blog.title}}</h4>
        <h6>{{new Date(blog.date).getDate()}}-{{new Date(blog.date).toLocaleString("en-us", { month: "long" })}}-{{new Date(blog.date).getFullYear()}}</h6>
      </div>
        <p @click="deletePost(blog)">
          x
        </p>
      </div>
    </div>
    <div v-else>
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
  </div>
</template>

<script>
export default {
  methods: {
    showBlogPost(blog) {
      let linkTitle = blog.title.split(' ').join('-')
      this.$router.push(`/blog/${linkTitle}`)
    },
    deletePost(blog) {
      let title = {
        title: blog.title
      }
      this.$store.dispatch('deletePost', title)
    }
  },
  mounted() {
    this.$store.dispatch('getBlogs')
    this.$store.dispatch('getUser')
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
