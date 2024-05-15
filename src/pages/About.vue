<template>
  <Layout>
    <div class="container">
      <h1>Hello, I'm Liam.</h1>
      <div class="max-600">
        <p>A multi-disciplinary creative director and technologist. Currently, I work as Head of Creative for an AI tech startup called Graphcore, with previous experience in an array of fields from radio and podcasting to fashion and e-commerce. My background in visual design, creative direction, programming and team leadership have fostered my mindful approach and swift creative problem-solving skills.</p>
        <p>Aside from my passions for creativity and music, I have a thirst for knowledge. I would say learning is my lifelong love. My self-starter attitude has enabled me to constantly learn a wide range of new skills in my spare time that has not only given me a varied toolkit at my disposal, but a unique and comprehensive perspective when envisioning projects.</p>
        <p>After a long career in the private sector, I'm looking for new challenges in organisations and institutions I truly believe in, and hope to use my skills and experience to help their causes. </p>
      </div>
      <g-image src="~/assets/me.jpg" alt="A picture of me" width="800" class="portrait"/>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  padding-top: 20px;
}
h1 {
  max-width: 100%;
  width: 780px;
  margin-left: -46px;
  padding: 23px 40px 0;
  margin-bottom: 3rem;
  overflow:hidden;
  position: relative;
  z-index: 1;
}
h1::before, h1::after {
  content: '';
  background: #342930;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  // animation: BGslide 1s forwards ease;
}
h1::before {
  background: #fef956;
  z-index:-2;
}
h1::after {
  animation: BGslide 1s forwards ease .2s;
  z-index: -1;
}
.portrait {
  position:absolute;
  right: -260px;
  top: 0px;
  z-index: -1;
  mix-blend-mode: hard-light;
  &:hover {
    mix-blend-mode: normal;
  }
}
.container::before {
    content: "About Me";
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100px;
    background: #c80473;
    z-index: -1;
    transform: translateX(-100px);
    animation: slideOut-2c11fd19 1s forwards ease 0.2s;
    writing-mode: vertical-lr;
    text-orientation: upright;
    color: #fef956;
    padding: 38px;
    box-sizing: border-box;
    text-transform: uppercase;
    font-family: 'Khula', sans-serif;
    font-size: 1.3rem;
    letter-spacing: 5px;
    line-height: 1;
}
@keyframes slideOut {
    from {
        transform: translateX(-100px);
    }

    to {
        transform: translateX(0px)
    }
}
@keyframes BGslide {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100%);
    }
}
</style>
