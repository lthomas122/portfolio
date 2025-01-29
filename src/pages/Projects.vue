<template>
  <Layout>
    <div class="container">
      <h1>Projects</h1>
      <div class="max-600">
        This is a sort of dumping ground for all my current projects. They're mostly works in progress, but they detail my explorations into different fields and areas of knowledge, like electronic engineering, music, installations, 3D/CAD design and so on. Some are big, some are small. They're all worked on in my spare time and as such a few of these projects are on hiatus until I can get funding or extra pairs of hands to help out.<br><strong>Note: This section is a work in progress and is yet to be populated.</strong>
      </div>
      <div v-for="post in $page.recentPosts.edges" :key="post.node.title">
            <div class="project-list-item">
              <g-link :to="post.node.path">{{ post.node.title }}</g-link>
            </div>
      </div>
    </div>
  </Layout> 
</template>

<page-query>
query Posts {
  recentPosts: allWork (filter: { category: { eq: "projects" }}) {
    edges {
      node {
        title
        summary
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Projects'
  }
}
</script>

<style lang="scss" scoped>
h1 {
  max-width: 100%;
  width: 780px;
  margin-left: -46px;
  padding: 23px 40px 0;
  margin-bottom: 3rem;
  color: #f7f9f6;
  overflow:hidden;
  position: relative;
  z-index: 1;
}
h1::before, h1::after {
  content: '';
  background: #f7f9f6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
h1::before {
  background: #c80473;
  z-index:-2;
}
h1::after {
  animation: BGslide 1s forwards ease .2s;
  z-index: -1;
}
.container {
  position: relative;
  padding-top: 20px;
}
.container::before {
    content: "Projects";
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100px;
    background: #fef956;
    z-index: -1;
    transform: translateX(-100px);
    animation: slideOut 1s forwards ease 0.2s;
    writing-mode: vertical-lr;
    text-orientation: upright;
    color: #c80473;
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
