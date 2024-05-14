<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="logo-link"><g-image v-if="this.$route.path !== '/'" alt="Liam Thomas" src="~/assets/logo.svg" width="250"/></g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/" value="Home">Home</g-link>
        <g-link class="nav__link" to="/about/" value="About">About</g-link>
        <g-link class="nav__link" to="/work/" value="About">Work</g-link>
        <g-link class="nav__link" to="/projects/" value="About">Projects</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 100px;
}

.nav__link {
  margin-left: 20px;
}
</style>
