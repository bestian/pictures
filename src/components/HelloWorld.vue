<template>
  <div class="hello">
    <h1>小太陽作品集</h1>
    <div class="images">
      <vue-picture-swipe :items="images"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      images: [
        {
          id: 1,
          src: require('@/assets/m1.png'),
          thumbnail: require('@/assets/m1.png'),
          w: 600,
          h: 400,
          alt: 'image'
        },
        {
          id: 2,
          src: require('@/assets/m2.png'),
          thumbnail: require('@/assets/m2.png'),
          w: 600,
          h: 400,
          alt: 'image'
        },
        {
          id: 3,
          src: require('@/assets/m3.png'),
          thumbnail: require('@/assets/m3.png'),
          w: 600,
          h: 400,
          alt: 'image'
        },
        {
          id: 4,
          src: require('@/assets/m4.png'),
          thumbnail: require('@/assets/m4.png'),
          w: 600,
          h: 400,
          alt: 'image'
        },
        {
          id: 5,
          src: require('@/assets/m5.png'),
          thumbnail: require('@/assets/m5.png'),
          w: 600,
          h: 400,
          alt: 'image'
        },
        {
          id: 6,
          src: require('@/assets/m6.png'),
          thumbnail: require('@/assets/m6.png'),
          w: 600,
          h: 400,
          alt: 'image'
        },
        {
          id: 7,
          src: require('@/assets/m7.png'),
          thumbnail: require('@/assets/m7.png'),
          w: 600,
          h: 400,
          alt: 'image'
        }
      ]
    }
  },
  mounted () {
  }
}

</script>

<style type="text/css">

img {
  max-width: 25vw;
  border-radius: 50px;
}

</style>
