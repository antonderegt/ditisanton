<template>
  <div>
    <h1>Blog</h1>
    <hr>
    <BlogPost title="This is what you need to know about Socially Responsible Programming" link="https://medium.freecodecamp.org/this-is-what-you-need-to-know-about-socially-responsible-programming-1085d31faec1" text="Lately, I have seen a lot of stories about people getting their first developer job. Like this one or this one or this one. This is great news, but... Their focus seems to be about getting the good..."/>
    <BlogPost title="Nobody is safe on the internet" link="https://medium.com/@antonderegt/nobody-is-safe-on-the-internet-e8ddf41925f0" text="Often I hear people say: “I don’t have much to hide, why would I bother keeping my data safe?”, a lot of companies would agree with you. Data is like gold, 1 MB of (potential) customer data can be..."/>
    <BlogPost title="Bearded Dragon Digest vol. 02" link="https://medium.com/@antonderegt/bearded-dragon-digest-vol-02-6a4bd8043fbe" text="Something disturbing is going on, there’s a disease running in the cohort… A few dragons are showing signs of the digital disease called ‘Data Hoarder’. Further investigation should tell us if this..."/>
    <BlogPost title="Bearded Dragon Digest vol. 01" link="https://medium.com/chingu/bearded-dragon-digest-vol-01-9eb597f77bd3" text="It’s amazing to see so much collaboration and discussions already in the very first week! A lot happened during this first week, we welcomed 42..."/>
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
