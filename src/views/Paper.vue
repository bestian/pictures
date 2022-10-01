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
        },
        {
          id: 7,
          src: require('@/assets/paper/p7.jpg'),
          thumbnail: require('@/assets/paper/p7.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 8,
          src: require('@/assets/paper/p8.jpg'),
          thumbnail: require('@/assets/paper/p8.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 9,
          src: require('@/assets/paper/p9.jpg'),
          thumbnail: require('@/assets/paper/p9.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 10,
          src: require('@/assets/paper/p10.jpg'),
          thumbnail: require('@/assets/paper/p10.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 11,
          src: require('@/assets/paper/p11.jpg'),
          thumbnail: require('@/assets/paper/p11.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 12,
          src: require('@/assets/paper/p12.jpg'),
          thumbnail: require('@/assets/paper/p12.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 13,
          src: require('@/assets/paper/p13.jpg'),
          thumbnail: require('@/assets/paper/p13.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 14,
          src: require('@/assets/paper/p14.jpg'),
          thumbnail: require('@/assets/paper/p14.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 15,
          src: require('@/assets/paper/p15.jpg'),
          thumbnail: require('@/assets/paper/p15.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 16,
          src: require('@/assets/paper/p16.jpg'),
          thumbnail: require('@/assets/paper/p16.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 17,
          src: require('@/assets/paper/p17.jpg'),
          thumbnail: require('@/assets/paper/p17.jpg'),
          w: 400,
          h: 500,
          alt: 'image'
        },
        {
          id: 18,
          src: require('@/assets/paper/p18.jpg'),
          thumbnail: require('@/assets/paper/p18.jpg'),
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

<style type="text/css" scoped>

img {
  max-width: 25vw;
  border-radius: 50px;
}

</style>
