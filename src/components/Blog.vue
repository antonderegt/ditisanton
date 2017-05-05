<template>
  <div>
    <div class="page-header">
      <img src="/assets/ditisanton.JPG"/>
      <h1>Anton de Regt<br /><small>Web developer in my free time</small></h1>
    </div>
    <div
      class="blogList"
      v-for="blog in blogs"
      @click="showBlogPost(blog)"
    >
      <h4>{{blog.title}}</h4>
      <h6>{{blog.date}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        { title:'Blogpost #1', shortText: 'blabla', date: 'May 5, 2017'},
        { title: 'Blogpost #2', shortText: 'Intro story', date: 'May 1, 2017'}
      ]
    }
  },
  methods: {
    showBlogPost(blog) {
      console.log(blog.title);
    }
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
