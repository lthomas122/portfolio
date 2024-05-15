<template>
  <Layout>
    <!-- Weird Gridsome video assets issue fix, there's probably a better fix but I can't find it right now  -->
      <video autoplay width="640" muted loop disablepictureinpicture playsinline>  
    <source src="../assets/productpagebow.webm" type="video/webm"> 
    <source src="../assets/Product Page bow.mp4" type="video/mp4"> 
    Sorry, your browser doesn't support HTML5 video.  
  </video>
  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: 'Videos'
  }
}
</script>
