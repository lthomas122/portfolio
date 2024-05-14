<template>
  <Layout>

    <div class="hero-container">
      <g-image alt="Liam Thomas" src="~/assets/logo.svg" width="1000" class="center" style="margin-block:2rem;" />

      <p class="text-center text-large">
        Creative Director + Technologist
      </p>
    </div>
    <div class="index__nav__container">
      <div class="index__nav">
        <g-link to="/about/" class="index-link">
          <h3>About Me</h3>
        </g-link>
      </div>
      <div class="index__nav">
        <g-link to="/work/" class="index-link">
          <h3>My Work</h3>
        </g-link>
      </div>
      <div class="index__nav">
        <g-link to="/projects/" class="index-link">
          <h3>Projects</h3>
        </g-link>
      </div>
    </div>

  </Layout> 
</template>

<script>
export default {
  metaInfo: {
    title: 'Liam Thomas - Creative Director + Technologist'
  }
}
</script>

<style lang="scss" scoped>
// Colour Variables
$white: #f7f9f6;
$yellow: #fef956;
$black: #342930;
$purple: #c80473;
.home-links a:not(.index-link) {
  margin-right: 1rem;
}
.hero-container {
  background: radial-gradient($white, transparent);
  padding-block: 80px;
  img {
    max-width: 100%;
    width: 800px;
  }
}
.index__nav__container {
  display: flex;
  justify-content: space-evenly;
  padding-top: 80px;
  .index__nav {
    flex: 0 0 15%;
    height:auto;
    background: $yellow;
    aspect-ratio: 1 / 1 ;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    position: relative;
    transition: 1s ease;
    pointer-events: auto;

    &::before {
      pointer-events: none;
    }

    &:nth-child(1){

      h3 {
        color: $white;
        background-image: linear-gradient(to right, $black, $black 38%, $white 38%, $white 62%, $black 62%, $black);
        background-size: 300% 100%;
        background-position: 100% 50%;
        background-repeat: no-repeat;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        transition: all 1s ease;
      }
      &::before, .index-link::before {
        content:'';
        position: absolute;
        top: -20%;
        left: -25%;
        background: $black;
        display: table;
        padding-top: 140%;
        width: 40%;
        z-index: -1;
        transition: 1s ease;
      }
      .index-link::before {
          background: $purple;
        }
      &:hover {
        &::before, .index-link::before {
          left: 85%;
        }

        h3 {
          background-position: 0% 50%;
        }
      }
    }

    &:nth-child(2){
      background: $black;
      h3 {
        color: $white;
      }
      &::before, .index-link::before {
        content:'';
        position: absolute;
        top: 85%;
        left: -20%;
        background: $yellow;
        display: table;
        height: 40%;
        width: 140%;
        z-index: -1;
        transition: 1s ease;
      }
      .index-link::before {
          background: $purple;
        }
      &:hover {
        &::before, .index-link::before {
          top: -25%;
        }
      }
    }
    
    &:nth-child(3){
      background: $purple;
      h3 {
        background-image: linear-gradient(to left, $white, $white 38%, $black 38%, $black 62%, $white 62%, $white);
        background-size: 300% 100%;
        background-position: 0% 50%;
        background-repeat: no-repeat;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        transition: all 1s ease;
      }
      &::before, .index-link::before {
        content:'';
        position: absolute;
        top: -20%;
        right: -25%;
        background: $black;
        display: table;
        padding-top: 140%;
        width: 40%;
        z-index: -1;
        transition: 1s ease;
      }
      .index-link::before {
          background: $yellow;
        }
      &:hover {
        &::before, .index-link::before {
          right: 85%;
        }
        h3 {
          background-position: 100% 50%;
        }
      }
    }

    .index-link {
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
      text-align: center;
      text-decoration: none;
      overflow: hidden;
      position:relative;
      z-index: 1;
      pointer-events: auto;

      h3 {
        margin: 0;
        line-height: 1;
        font-size: 160%;
      }
    }

    &::before {
      content:'';
    } 
  }
}
</style>
