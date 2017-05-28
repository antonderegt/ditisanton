<template lang="html">
  <div class="comment">
    <h5>{{comment.name}}</h5>
    <p>{{comment.text}}</p>
  </div>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style lang="css" scoped>
.comment {
  text-align: left;
}

h5 {
  color: #42b983;
}
</style>
