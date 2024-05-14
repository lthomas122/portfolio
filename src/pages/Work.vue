<template>
  <Layout>

    <div class="hero-container">
      <g-image alt="Liam Thomas" src="~/assets/logo.svg" width="1000" class="center" style="margin-block:2rem;" />

      <p class="text-center text-large">
        Creative Director & Technologist
      </p>
    </div>
    <div class="max-600">
      <h3>About Me</h3>
      <p>Hello, I'm Liam. A multi-disciplinary creative director and technologist. Currently, I work as Head of Creative for an AI tech startup called Graphcore, with previous experience in an array of fields from radio and podcasting to fashion and e-commerce. </p>
      <p>My background in visual design, creative direction, programming and team leadership have fostered my mindful approach and swift creative problem-solving.</p>
      <p>Aside from my passions for creativity and music, I have a thirst for knowledge. I would say learning is my one true love. My self-starter attitude has enabled me to constantly learn a wide range of new skills in my spare time, that has not only given me a varied toolkit at my disposal, but a unique and comprehensive perspective when envisioning projects.</p>
      <p>After a long career in the private sector, I'm looking for new challenges in organisations and institutions I truly believe in, and hope to use my skills and experience to help their causes. </p>
      <p class="home-links">
        <a href="https://gridsome.org/docs/" target="_blank" rel="noopener" value="Gridsome Docs">Gridsome Docs</a>
        <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener" value="GitHub">GitHub</a>
      </p>
    </div>

  </Layout> 
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}
.hero-container {
  background: radial-gradient(#f7f9f6, transparent);
  padding-block: 150px;
  img {
    max-width: 100%;
    width: 800px;
  }
}
</style>
