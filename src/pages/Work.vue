<template>
  <Layout>
    <h1>Work</h1>
    <div class="max-600">
      <div v-for="post in $page.recentPosts.edges" :key="post.node.title">
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query Posts {
  recentPosts: allWork (filter: { category: { eq: "work" }}) {
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
    title: 'Work'
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
