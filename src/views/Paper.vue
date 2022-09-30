<template>
  <div class="hello">
    <h1>小太陽作品集-摺紙</h1>
    <div class="images">
      <vue-picture-swipe :items="images"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PaPer',
  metaInfo: {
    title: '摺紙'
  },
  data () {
    return {
      images: [
        {
          id: 0,
          src: require('@/assets/paper/p0.jpeg'),
          thumbnail: require('@/assets/paper/p0.jpeg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 1,
          src: require('@/assets/paper/p1.jpg'),
          thumbnail: require('@/assets/paper/p1.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 2,
          src: require('@/assets/paper/p2.jpg'),
          thumbnail: require('@/assets/paper/p2.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 3,
          src: require('@/assets/paper/p3.jpg'),
          thumbnail: require('@/assets/paper/p3.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 4,
          src: require('@/assets/paper/p4.jpg'),
          thumbnail: require('@/assets/paper/p4.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 5,
          src: require('@/assets/paper/p5.jpg'),
          thumbnail: require('@/assets/paper/p5.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 6,
          src: require('@/assets/paper/p6.jpg'),
          thumbnail: require('@/assets/paper/p6.jpg'),
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
