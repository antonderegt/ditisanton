<template lang="html">
  <div>
    <div class="page-header">
      <!-- @TODO blogpost image -->
      <h1>{{blog.title}}</h1>
    </div>
    <p>
      {{blog.shortText}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['blog']
}
</script>

<style lang="css">
</style>
