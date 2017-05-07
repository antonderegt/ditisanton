<template>
  <div id="app" class="container">
    <div class="col-md-6 col-md-offset-3">
      <router-link to="/">Home</router-link> |
      <a href="https://github.com/antonderegt" target="_blank">GitHub</a> |
      <a href="https://twitter.com/antonderegt" target="_blank">Twitter</a> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/resources">Resources</router-link>
      <!-- | -->
      <!-- <a v-if="this.$store.state.user.displayName" href="/logout" @click="signOut">Log Out</a> -->
      <!-- <router-link v-else to="/signin">Sign In</router-link> -->
      <router-view />
      <hr />
    </div>
    <p class="copyright col-md-12">
      © Copyright 2017 Anton de Regt
    </p>
  </div>
</template>

<script>
// TODO: signin via local to add blogs, share blogs in twitter and stuff
export default {
  name: 'app',
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
    }
  },
  mounted() {
    this.$store.dispatch('getUser')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

.copyright {
  color: lightGray;
  size: 10px;
}
</style>
