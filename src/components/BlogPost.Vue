<template lang="html">
  <div>
    <div class="page-header">
      <!-- @TODO blogpost image -->
      <h1>{{this.$store.state.post.title}}</h1>
    </div>
    <p class="blogText" v-html="this.$store.state.post.text"></p>
    <hr>
    <div v-if="this.$store.state.post.comments.length">
      <Comment v-for="(comment, index) in this.$store.state.post.comments" :key="index" :comment="comment" />
    </div>
    <div v-else>
      <p>You can be the first to comment!</p>
    </div>
    <hr>
    <form>
      <div class="form-group">
        <label class="control-label">Name:</label>
        <input type="text" class="form-control" v-model="commenterName">
      </div>
      <div class="form-group">
        <label class="control-label">Comment:</label>
        <textarea class="form-control" v-model="commentText"></textarea>
      </div>
    </form>
    <button type="button" class="btn btn-primary" @click="postComment">Comment</button>
  </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  data() {
    return {
      commenterName: '',
      commentText: ''
    }
  },
  methods: {
    postComment() {
      let comment = {
        blogTitle: this.$store.state.post.title,
        name: this.commenterName,
        text: this.commentText
      }
      this.$store.dispatch('postNewComment', comment)
      this.commenterName = ''
      this.commentText = ''
    }
  },
  mounted() {
    let postTitle = this.$route.params.title.split('-').join(' ')
    this.$store.dispatch('getPost', postTitle)
  },
  components: {
    Comment
  }
}
</script>

<style lang="css">
.blogText {
  text-align: left;
}
</style>
