<template lang="html">
  <div>
    <div class="page-header">
      <!-- @TODO blogpost image -->
      <h1>{{this.$store.state.post.title}}</h1>
    </div>
    <p>
      {{this.$store.state.post.text}}
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    let linkTitle = this.$route.params.title.split('-').join(' ')
    let title = linkTitle.charAt(0).toUpperCase() + linkTitle.slice(1)
    this.$store.dispatch('getPost', title)
    console.log(title)
  }
}
</script>

<style lang="css">
</style>
