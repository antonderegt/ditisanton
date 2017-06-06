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
  border: 1px solid lightGray;
  padding: 16px;
  margin: 16px;
  border-radius: 4px;
}

.blogPostText {
  text-align: left;
}
</style>
