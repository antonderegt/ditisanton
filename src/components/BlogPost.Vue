<template lang="html">
  <div class="blogPost">
    <a :href="link" target="_blank" rel="noopener"><h2>{{title}}</h2></a>
    <p class="blogPostText">{{text}} <a :href="link" target="_blank" rel="noopener">Continue reading</a></p>
  </div>
</template>

<script>
export default {
  props: ['title', 'text', 'link']
}
</script>

<style lang="css" scoped>
.blogPost {
  border: 0px solid lightGray;
  padding: 16px;
  margin: 24px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 10, 0, 0.2), 0 3px 15px 0 rgba(0, 50, 0, 0.19);
}

.blogPostText {
  text-align: left;
}
</style>
