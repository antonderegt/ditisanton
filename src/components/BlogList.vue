<template>
  <div>
    <h1>Blog</h1>
    <hr>
    <BlogPost title="How my site loads in 1.25s" link="https://medium.com/@antonderegt/how-my-site-loads-in-1-25s-56151a06ab8d" text="Last week I received a shocking message from Google. I forgot how it happened but Google asked me if I wanted to test how mobile friendly..."/>
    <BlogPost title="Keep Moving Your Fucking Fingers" link="https://medium.com/@antonderegt/https-medium-com-antonderegt-keep-moving-your-fucking-fingers-cdd1c631abf3" text="In this post, I’m going to talk about how a project I was trying to do with two dudes I never met before totally failed. First I’ll start..."/>
    <BlogPost title="Nodemailer Struggles" link="https://medium.com/@antonderegt/nodemailer-struggles-9bbf702aee01" text="Have any of you used Nodemailer before? Until this afternoon I hadn’t, but hey, it’s just another package can’t be too hard. On this site..."/>
  </div>
</template>

<script>
import BlogPost from './BlogPost.vue'

export default {
  components: {
    BlogPost
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
