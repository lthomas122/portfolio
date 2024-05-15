<template>
    <Layout>
        <div class="post__container" :value="$page.post.title">
            <div v-html="$page.post.content" class="post__body" />
            <div class="back-to-listing">
                <g-link to="/work">Go back to listing page</g-link>
            </div>
        </div>

    </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: work (path: $path) {
    title
    summary
    path
    content
    headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title
        }
    }
}
</script>

<style lang="scss">
div.post__container {
    max-width: 780px;
    padding-bottom: 100px;
    p {
        line-height: 1.6;
        
        code {
            font-size: 96%;
            background: #fff;
        }
    }
    a {
        &::before, &::after {
            content: none;
        }
    }
    em {
        a {
            font-style: italic;
        }
    }
    h2 {
        font-size: 440%;
    }
    h2, h3 {
      max-width: 100%;
      width: 780px;
      margin-left: -46px;
      padding: 23px 40px 0;
      color: #f7f9f6;
      overflow:hidden;
      position: relative;
      z-index: 1;
    }
    h2::before, h2::after, h3::before, h3::after {
      content: '';
      background: #f7f9f6;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    h2::before {
      background: #c80473;
      z-index:-2;
    }
    h3::before {
      background: #fef956;
      z-index:-2;
    }
    h2::after, h3::after {
      animation: BGslide 1s forwards ease .2s;
      z-index: -1;
    }
    h2, h3 {
        padding-top: 20px;
    }
    h3 {
        display: inline-block;
        width: auto;
        color: #c80473;
        padding: 10px 30px 0px;
        margin-left: -30px;
        margin-bottom: 10px;
        &:nth-of-type(even) {
            color:#fef956;
            &::before {
                background:#c80473;
            }
        }
    }
    figure {
        margin: 0;
        background: #fef956;
        max-width: calc(640px + 3.1565rem);
        border-bottom-right-radius: 50.5px;
        overflow: hidden;
        margin-bottom: 2rem;
        p {
            margin: 0;
        }
    }
    figcaption {
        padding: 1rem;
        background: #c80473;
        color: #f7f9f6;
        position: relative;
        max-width: calc(640px + 3.1565rem);
        
        &::after {
            content: '';
            position: absolute;
            width: calc(100% - 640px);
            height: 100%;
            top: 0;
            right: 0;
            background: #342930;
            border-bottom-right-radius: 50.5px;
        }

        em {
            font-weight: 600;
            a {
                color: #fef956;
            }
        }
    }
    img, video, iframe {
        max-width: 100%;
        width: 640px;
        display: block;
    }
    &::before {
        content: attr(value);
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
        line-height: 1;
    }
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