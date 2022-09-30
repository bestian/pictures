<template>
  <div class="hello">
    <h1>小太陽作品集-曼陀羅</h1>
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
  metaInfo: {
    title: '曼陀羅'
  },
  data () {
    return {
      images: [
        {
          id: 0,
          src: require('@/assets/m0.jpg'),
          thumbnail: require('@/assets/m0.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 1,
          src: require('@/assets/m1.png'),
          thumbnail: require('@/assets/m1.png'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 2,
          src: require('@/assets/m2.png'),
          thumbnail: require('@/assets/m2.png'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 3,
          src: require('@/assets/m3.png'),
          thumbnail: require('@/assets/m3.png'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 4,
          src: require('@/assets/m4.png'),
          thumbnail: require('@/assets/m4.png'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 5,
          src: require('@/assets/m5.png'),
          thumbnail: require('@/assets/m5.png'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 6,
          src: require('@/assets/m6.png'),
          thumbnail: require('@/assets/m6.png'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 7,
          src: require('@/assets/m7.png'),
          thumbnail: require('@/assets/m7.png'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 8,
          src: require('@/assets/m8.jpg'),
          thumbnail: require('@/assets/m8.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 9,
          src: require('@/assets/m9.jpg'),
          thumbnail: require('@/assets/m9.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 10,
          src: require('@/assets/m10.jpg'),
          thumbnail: require('@/assets/m10.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 11,
          src: require('@/assets/m11.jpg'),
          thumbnail: require('@/assets/m11.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 12,
          src: require('@/assets/m12.jpg'),
          thumbnail: require('@/assets/m12.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 13,
          src: require('@/assets/m13.jpg'),
          thumbnail: require('@/assets/m13.jpg'),
          w: 400,
          h: 500,
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
