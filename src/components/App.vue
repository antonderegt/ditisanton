<template>
  <div id="app" class="container">
    <div class="screen">
      <router-link to="/">Home</router-link> |
      <a href="https://github.com/antonderegt" target="_blank">GitHub</a> |
      <a href="https://twitter.com/antonderegt" target="_blank">Twitter</a> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/resources">Resources</router-link>
      <a v-if="this.$store.state.user.local" href="/logout" @click="signOut"> | Log Out</a>
      <!-- <router-link v-else to="/signin">Sign In</router-link> -->
      <router-view />
      <hr />
    </div>
    <p class="copyright">
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

h1, h2, h3, h4 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
  text-decoration: none;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  border-radius: 4px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

button:hover {
  background-color: #449d47;
}

input[type=text], textarea {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

hr {
  height: 1px;
  color: lightGray;
  background-color: lightGray;
  border: none;
}

small {
  color: gray;
  font-size: 22px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.screen {
  margin-left: 3%;
  margin-right: 3%;
}

@media only screen and (min-width: 768px) {
  .screen {
    width: 50%;
  }
}

.copyright {
  color: lightGray;
  size: 10px;
}

.route {
  margin: 20px;
}

.page-header {
  margin: 20px;
}

.closeButton {
  color: #F34235;
  border: 1px solid;
  border-color: #F34235;
  background-color: transparent;
}

.closeButton:hover {
  color: #fff;
  background-color: #F34235;
  border-color: #F34235;
}
</style>
